module.exports = async function (context, req) {
    const { name } = req.body || {};

    context.res = {
        status: 200,
        body: {
            message: "Resume generated for " + (name || "user")
        }
    };
};