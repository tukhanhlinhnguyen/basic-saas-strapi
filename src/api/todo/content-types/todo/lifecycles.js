module.exports = {
    async afterCreate(event) {
        const { result } = event

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'ntklsideproject@gmail.com',
                from: 'ntklsideproject@gmail.com',
                subject: 'You got a todo',
                text: `Your todo is : ${result.name}`
            })
             
        } catch(err) {
            console.log(err)
        }
    }
}