const { DocsType } = require('./launch')
const { SpacexQueryParameters } = require('../utils/spacex-api-search')
const { axiosApi } = require('../utils/axios')
const dayjs = require('dayjs')
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLError,
    GraphQLEnumType,
    GraphQLInt,
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLBoolean
} = require('graphql');
//LaunchStatus Type
const LaunchStatus = new GraphQLEnumType({
    name: 'LaunchStatus',
    values: {
        UPCOMING: { value: 'UPCOMING' },
        SUCCESS: { value: 'SUCCESS' },
        FAILURE: { value: 'FAILURE' },
        ALL: { value: 'ALL' },
    },
});
const SearchFieldsParameters = new GraphQLInputObjectType({
    name: 'SearchFieldsParameters',
    fields: {
        date_utc: { type: GraphQLBoolean, defaultValue: true },
        name: { type: GraphQLBoolean, defaultValue: true },
        details: { type: GraphQLBoolean, defaultValue: true },
    },
});
const LaunchQuery = new GraphQLObjectType({
    name: 'LaunchQueryType',
    fields: {
        launches: {
            type: DocsType,
            args: {
                status: {
                    type: LaunchStatus,
                    defaultValue: 'ALL'
                },
                page: {
                    type: GraphQLInt,
                    defaultValue: 1
                },
                search: {
                    type: GraphQLString
                },
                searchFields: {
                    type: SearchFieldsParameters,

                }
            },
            resolve: async (parent, args) => {
                try {
                    const data = (await axiosApi.post('/launches/query', SpacexQueryParameters(args))).data
                    data.docs.map(x => {
                        x.date_utc = dayjs(x.date_utc).format(
                            "MMMM D, YYYY [at] h:mm A [UTC]"
                        );
                    })
                    return data
                } catch (error) {
                    throw new GraphQLError(error.message);
                }
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: LaunchQuery,
});