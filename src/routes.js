import welcome from './components/common/welcome.vue';
import dashboard from './components/dashboard.vue';
import user from './components/user/user.vue';
import viewUsers from './components/user/viewUsers.vue';
import item from './components/item/item.vue';
import itemList from './components/item/itemsList.vue';
import job from './components/job/job.vue';
import jobsList from './components/job/jobsList.vue';
import attendance from './components/attendance/attendance.vue';
import viewAttendance from './components/attendance/viewAttendance.vue';
import trip from './components/trip/trip.vue';
import viewTrips from './components/trip/viewTrips.vue';
import viewFuel from './components/fuel/viewFuel.vue';
import fuelLogs from './components/fuel/fuelLogs.vue';
import estimate from './components/estimate/estimate.vue';
import estimatesList from './components/estimate/estimatesList.vue';
import resetPassword from './components/common/resetPassword.vue';

// reports
import auditR from './components/reports/auditR.vue';
import userR from './components/reports/userR.vue';
import attendanceR from './components/reports/attendanceReport.vue';
import vehicleR from './components/reports/vehicleR.vue';
import placeR from './components/reports/placeR.vue';
import fuelR from './components/reports/fuelR.vue';
import maintaR from './components/reports/maintaR.vue';
import financeR from './components/reports/financeR.vue';
import summaryR from './components/reports/summaryR.vue';
import tripR from './components/reports/tripR.vue';

import backupDb from './components/backupDb.vue';

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: welcome,

  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,

    meta: { permissions: ['admin', 'manager'] },

  }, {
    path: '/user',
    component: user,

    meta: { permissions: ['admin'] },
  },
  {
    path: '/viewUsers',
    component: viewUsers,
    meta: { permissions: ['admin'] },

  },
  {
    path: '/item',
    component: item,
    meta: { permissions: ['admin', 'staff', 'manager'] },

  },
  {
    path: '/itemList',
    component: itemList,
    meta: { permissions: ['admin', 'staff', 'manager'] },

  }, {
    path: '/job',
    component: job,
    meta: { permissions: ['admin', 'staff', 'manager'] },

  }, {
    path: '/jobsList',
    component: jobsList,
    meta: { permissions: ['admin', 'staff', 'manager'] },

  }, {
    path: '/attendance',
    component: attendance,
    meta: { permissions: ['admin', 'staff', 'manager'] },

  }, {
    path: '/viewAttendance',
    component: viewAttendance,
    meta: { permissions: ['admin', 'staff', 'manager'] },

  }, {
    path: '/trip',
    component: trip,
    meta: { permissions: ['admin', 'staff', 'manager'] },

  }, {
    path: '/viewTrips',
    component: viewTrips,
    meta: { permissions: ['admin', 'staff', 'manager', 'driver'] },

  }, {
    path: '/viewFuel',
    component: viewFuel,
    meta: {
      permissions: ['admin', 'staff', 'manager', 'driver'],
    },
  }, {
    path: '/fuelLogs',
    component: fuelLogs,
    meta: {
      permissions: ['admin', 'staff', 'manager', 'driver'],
    },
  }, {
    path: '/estimate',
    component: estimate,
    meta: { permissions: ['admin', 'staff', 'manager', 'driver'] },

  }, {
    path: '/viewMaintence',
    component: estimatesList,
    meta: { permissions: ['admin', 'staff', 'manager', 'driver'] },

  },
  {
    path: '/attendanceR',
    component: attendanceR,
    meta: {
      permissions: ['admin', 'manager'],

    },
  },
  {
    path: '/userR',
    component: userR,
    meta: {
      permissions: ['admin', 'manager'],

    },
  }, {
    path: '/auditR',
    component: auditR,
    meta: {
      permissions: ['admin', 'manager'],

    },
  }, {
    path: '/vehicleR',
    component: vehicleR,
    meta: {
      permissions: ['admin', 'manager'],

    },
  }, {
    path: '/placeR',
    component: placeR,
    meta: {
      permissions: ['admin', 'manager'],

    },
  },
  {
    path: '/resetPassword',
    component: resetPassword,
    meta: { permissions: ['admin', 'staff', 'manager', 'driver'] },

  },
  {
    path: '/fuelR',
    component: fuelR,
    meta: {
      permissions: ['admin', 'manager'],

    },
  }, {
    path: '/maintaR',
    component: maintaR,
    meta: {
      permissions: ['admin', 'manager'],

    },

  },
  {
    path: '/financeR',
    component: financeR,
    meta: {
      permissions: ['admin', 'manager'],

    },

  },
  {
    path: '/summaryR',
    component: summaryR,
    meta: {
      permissions: ['admin', 'manager'],

    },

  },

  {
    path: '/backupdb',
    name: 'backup',
    component: backupDb,


  },
  {
    path: '/tripsR',
    name: 'tripsR',
    component: tripR,


  },


];

export default routes;
