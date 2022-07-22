module.exports = mongoose => {
    const User =mongoose.model(
                "user",
        mongoose.Schema(
            {
                isAdmin:{type:Boolean},
                name:{type:String},
                email:{type:String},
                password:{type:String}

            }
        )
    );
    return User;
};