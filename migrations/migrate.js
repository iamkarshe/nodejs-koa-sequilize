const Sequelize = require('sequelize')
const sequelize = require('../config').sequelize


// User Table
var User = sequelize.define('users', {
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: 'uniqueEmail',
    allowNull: true,
    validate: {
      isEmail: true,
    }
  },
  mobileNumber: {
    type: Sequelize.STRING(10),
    unique: 'uniqueMobileNumber',
    allowNull: false,
  },
  uuid: {
    type: Sequelize.STRING(32),
    unique: 'uniqueUUID',
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  isMobileVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  isEmailVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  emailVerificationToken: {
    type: Sequelize.STRING,
    allowNull: true
  },
  mobileVerificationOTP: {
    type: Sequelize.STRING(6),
    allowNull: true
  },
  deletedAt: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, {
  freezeTableName: true 
});

User.sync({force: true}).then(function () {
  console.log("User table made.");
});

// State Table 
var State = sequelize.define('states', {
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: 'uniqueName'
  },
  shortCode: {
    type: Sequelize.STRING(4),
    allowNull: false,
    unique: 'uniqueShortCode'
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
  freezeTableName: true,
});

State.sync({force: true}).then(function () {
  console.log("State table made.");
});

// City Table
var City = sequelize.define('cities', {
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
  freezeTableName: true,
});

City.belongsTo(State, {
  foreignKey: 'stateID'
});

City.sync({force: true}).then(function () {
  console.log("City table made.");
});

// Company Table
var Company = sequelize.define('companies', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contactEmail: {
    type: Sequelize.STRING,
    unique: 'uniqueEmail',
    allowNull: true,
    validate: {
      isEmail: true,
    }
  },
  contactNumber: {
    type: Sequelize.STRING(10),
    unique: 'uniqueMobileNumber',
    allowNull: false,
  },
  uuid: {
    type: Sequelize.STRING(32),
    unique: 'uniqueUUID',
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING(128),
    unique: 'uniqueSlug',
    allowNull: false,
  },
  gstNumber: {
    type: Sequelize.STRING(32),
    allowNull: true,
  },
  website: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  companyVideo: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  city: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  brochure: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  logo: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  views: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  stateID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  deletedAt: {
    type: Sequelize.DATE,
    allowNull: true
  },
}, {
  freezeTableName: true,
});

Company.belongsTo(User, {
  foreignKey: 'userID'
});

Company.sync({force: true}).then(function () {
  console.log("Company table made.");
});

// Category Table

// Product Table 

//