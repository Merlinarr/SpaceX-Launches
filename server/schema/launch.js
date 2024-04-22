const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} = require('graphql');

//Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    id: { type: GraphQLID },
    flickr_images: { type:  new GraphQLList(GraphQLString) },
    name: { type: GraphQLString },
    success_rate_pct: { type: GraphQLInt },
    description: { type: GraphQLString }
  })
});

//Launchpad Type
const LaunchpadType = new GraphQLObjectType({
  name: 'Launchpad',
  fields: () => ({
    id: { type: GraphQLID },
    full_name: { type:  GraphQLString },
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat },
    timezone: { type: GraphQLString }
  })
});

//Patch Type
const PatchType = new GraphQLObjectType({
  name: 'Patch',
  fields: () => ({
    large: { type: GraphQLString }
  })
});



//Links Type
const LinksType = new GraphQLObjectType({
  name: 'Links',
  fields: () => ({
    patch: { type: PatchType },
    webcast: { type: GraphQLString }
  })
});

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    id: { type: GraphQLID },
    links: { type: LinksType },
    rocket: { type: RocketType },
    success: { type: GraphQLBoolean },
    failures: { type: new GraphQLList(GraphQLString) }, 
    details: { type: GraphQLString },
    launchpad: { type: LaunchpadType },
    name: { type: GraphQLString },
    date_utc: { type: GraphQLString },
    upcoming: { type: GraphQLBoolean }
  })
});
// Docs Type
const DocsType = new GraphQLObjectType({
  name: 'Docs',
  fields: () => ({
    docs: { type: new GraphQLList(LaunchType) },
    totalDocs: { type: GraphQLInt },
    totalPages: { type: GraphQLInt },
  })
});

module.exports = { DocsType }