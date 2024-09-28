

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Users", {
        user_id: {
            type: DataTypes.STRING(24),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false,
        },
        password_hash: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    });
}

module.exports = User;
