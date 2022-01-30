import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Task from '../app/models/Task';

const models = [User];

class Database{
    constructor(){
        this.init();
    };

    init(){
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && models.associate(this.connection.modles));
    };
}

export default new Database();
