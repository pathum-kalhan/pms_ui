module.exports = {
  admin: [


    { icon: 'fa-chart-line', text: 'Dashboard', path: '/dashboard' },
    {
      icon: 'fa-angle-up',
      'icon-alt': 'fa-angle-down',
      text: 'User management',
      children: [
        { text: 'Create an user', path: '/user' },
        { text: 'Users list', path: '/viewUsers' },
      ],
    },
    {
      icon: 'fa-angle-up',
      'icon-alt': 'fa-angle-down',
      text: 'Attendance management',
      children: [
        { text: 'Mark attendance', path: '/attendance' },
        { text: 'Attendance history', path: '/viewAttendance' },
      ],
    },
    {
      icon: 'fa-angle-up',
      'icon-alt': 'fa-angle-down',
      text: 'Item management',
      children: [
        { text: 'Create an item', path: '/item' },
        { text: 'Items list', path: '/itemList' },
      ],
    },
    {
      icon: 'fa-angle-up',
      'icon-alt': 'fa-angle-down',
      text: 'Job management',
      children: [
        { text: 'Create a job', path: '/job' },
        { text: 'Jobs list', path: '/jobsList' },
      ],
    },
    {
      icon: 'fa-angle-up',
      'icon-alt': 'fa-angle-down',
      text: 'Estimates management',
      children: [
        { text: 'Create an estimate', path: '/estimate' },
        { text: 'Estimates list', path: '/estimatesList' },
      ],
    },

    { icon: 'fas fa-key', text: 'Reset password', path: '/resetPassword' },


    {
      icon: 'fa-angle-up',
      'icon-alt': 'fa-angle-down',
      text: 'Reports',
      children: [
        { text: 'Audits report', path: '/auditR' },

        { text: 'Users report', path: '/userR' },
        { text: 'Attendances report', path: '/attendanceR' },
        { text: 'Items report', path: '/itemR' },
        // { text: 'Places report', path: '/placeR' },
        // { text: 'Trips report', path: '/tripsR' },

        // { text: 'Fuel report', path: '/fuelR' },
        // { text: 'Maintenance report', path: '/maintaR' },
        // { text: 'Finance report', path: '/financeR' },

        // { text: 'Summary report', path: '/summaryR' },


      ],
    },


  ],


};
