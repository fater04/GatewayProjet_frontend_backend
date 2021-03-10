module.exports = (sql, Sequelize) => {
    const Device = sql.define("devices", {
        nom: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: "my phone"
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: "509 0000 0000"
        },code: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Device;
};
