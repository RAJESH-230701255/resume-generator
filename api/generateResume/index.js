module.exports = async function (context, req) {
    try {
        const body = req.body || {};
        const name = body.name || "User";

        context.res = {
            status: 200,
            body: {
                message: "Resume generated for " + name
            }
        };

    } catch (error) {
        context.res = {
            status: 500,
            body: {
                message: "Server error",
                error: error.message
            }
        };
    }
};