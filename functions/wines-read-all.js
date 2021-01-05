/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query


exports.handler = (event, context) => {
    console.log('Function `wines-read-all` invoked')
    console.log(`FAUNADB_SECRET: ${process.env.FAUNADB_SECRET}`)
    /* configure faunaDB Client with our secret */
    const client = new faunadb.Client({
        secret: process.env.FAUNADB_SECRET
    })
    return client.query(q.Paginate(q.Match(q.Ref('indexes/all_wines'))))
        .then((response) => {
            const wineRefs = response.data
            console.log('Wine refs', wineRefs)
            console.log(`${wineRefs.length} wines found`)
            // create new query out of wine refs. http://bit.ly/2LG3MLg
            const getAllWineDataQuery = wineRefs.map((ref) => {
                return q.Get(ref)
            })
            // then query the refs
            return client.query(getAllWineDataQuery).then((ret) => {
                return {
                    statusCode: 200,
                    body: JSON.stringify(ret)
                }
            })
        }).catch((error) => {
            console.log('error', error)
            return {
                statusCode: 400,
                body: JSON.stringify(error)
            }
        })
}
