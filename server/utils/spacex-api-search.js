const SpacexQueryParameters = (args) => {
    let query = {
        $and: []
    }
    switch (args.status) {
        case 'ALL':
            query.$and = []
            break
        case 'UPCOMING':
            query.$and.push({ upcoming: true })
            break
        case 'SUCCESS':
            query.$and.push({ success: true })
            break
        case 'FAILURE':
            query.$and.push({ success: false })
            break
        default:
            break
    }
    if (args.search) {
        const or = {
            $or: []
        }
        const keys = Object.keys(args.searchFields)
        keys.map(key => {
            if (args.searchFields[key]) {
                let rule = {}
                rule[`${key}`] = { "$regex": `${args.search}`, "$options": "i" }
                or.$or.push(rule)
            }
        })
        if (or.$or.length > 0) {
            query.$and.push(or)
        }

    }
    if (query.$and.length == 0) {
        query = {}
    }
    console.log(query.$and)
    const Parameters = {
        "query": query,
        "options": {
            "limit": 20,
            "page": args.page,
            "populate": [
                {
                    "path": "rocket",
                    "select": {
                        "name": 1,
                        "success_rate_pct": 1,
                        "flickr_images": 1,
                        "description": 1
                    }
                },
                {
                    "path": "launchpad",
                    "select": {
                        "full_name": 1,
                        "timezone": 1,
                        "latitude": 1,
                        "longitude": 1
                    }
                }
            ]
        }
    }
    return Parameters
}
module.exports = { SpacexQueryParameters }