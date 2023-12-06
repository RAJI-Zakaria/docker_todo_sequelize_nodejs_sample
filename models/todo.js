module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  
    return Todo;
  };
  