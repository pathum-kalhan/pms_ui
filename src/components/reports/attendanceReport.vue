<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title>
          <h1>Attendances Report</h1>
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12 sm12 md6>
              <v-autocomplete :items="users"
                    v-model="userId"
                    label="Staff member"
                    item-text="fullName"
                    item-value="id"
                    outline
                    class="required"
                    multiple
                  ></v-autocomplete>
            </v-flex>
            <v-flex xs12 sm12 md6>
              <v-autocomplete
                label="Order by"
                outline
                :items="orderByTypes"
                item-text="text"
                item-value="value"
                v-model="orderBy"
              ></v-autocomplete>
            </v-flex>


            <v-flex xs12 sm12 md6>
              <v-subheader>Created From</v-subheader>
              <v-date-picker  v-model="dateFrom" :max="maxDate" landscape></v-date-picker>
            </v-flex>
            <v-flex xs12 sm12 md6>
              <v-subheader>Created To</v-subheader>
              <v-date-picker  v-model="dateTo" :max="maxDate" landscape></v-date-picker>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <JsonExcel
            class="btn"
            :fetch="POST"
            :fields="json_fields"
            name="attendanceReport.csv"
            type="csv"
            :style=" $v.$invalid ? 'pointer-events:none;cursor: no-drop;' : 'pointer-events:auto;' "

          >Download Excel</JsonExcel>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm12 md12>
      <v-alert v-model="hasAlert" dismissible :type="alertType">{{alert}}</v-alert>
    </v-flex>
  </v-layout>
</template>

<script>
import JsonExcel from 'vue-json-excel';
import { required } from 'vuelidate/lib/validators';

const dateGreaterThan = (value, vm) => {
  const from = new Date(vm.dateFrom);
  const to = new Date(value);
  return from <= to;
};
export default {
  components: {
    JsonExcel,
  },
  validations: {
    userId: { required },
    orderBy: { required },
    dateTo: { required, dateGreaterThan },
    dateFrom: { required },
  },
  mounted() {
    this.getUsers();
    this.maxDate = this.$moment().format('YYYY-MM-DD');
  },
  data() {
    return {
      maxDate: '',
      json_fields: {
        Id: 'id',
        Staff: 'fullName',
        'Attendance Date': 'attendanceDate',
        Site: 'site',
        'Check In': 'checkIn',
        'Check Out': 'checkOut',
        Type: 'status',
        createdAt: 'createdAt',

      },
      items: [],
      selectedCats: [],
      dateFrom: '',
      alertType: 'error',
      alert: 'Error while loading the data from API...',
      hasAlert: false,
      categories: [],
      fuelType: '',
      dateTo: '',
      users: [],
      userId: [],
      orderByTypes: [
        // { text: 'Name Ascending', value: 'name' },
        // { text: 'Name Descending', value: 'name DESC' },
        { text: 'Attendance Date', value: 'DATE(attendanceDate.createdAt)' },
        { text: 'Attendance Date Descending', value: 'DATE(attendanceDate.createdAt) DESC' },
        { text: 'Site Name', value: 'site' },
        { text: 'Created Date Ascending', value: 'DATE(attendances.createdAt)' },
        { text: 'Created Date Descending', value: 'DATE(attendances.createdAt) DESC' },
      ],
      orderBy: 'DATE(attendances.createdAt)',
    };
  },
  methods: {
    async getUsers() {
      try {
        const data = await this.$http.get('auth');
        this.users = data.data;
      } catch (error) {
        this.alertType = 'error';
        this.alert = 'Error while loading the users data from API...';
        this.hasAlert = false;
      }
    },
    async POST() {
      try {
        const formData = {
          ids: this.userId,
          from: this.dateFrom,
          to: this.dateTo,

          orderBy: this.orderBy,
        };
        if (this.$v.$invalid) {
          this.alertType = 'error';
          this.alert = 'Please fill all the required fields.';
          this.hasAlert = true;
          return;
        }

        const data = await this.$http.post('attendance/report', formData);
        if (data.data.length === 0) {
          this.alertType = 'error';
          this.alert = 'No data available!';
          this.hasAlert = true;
          return;
        }
        return data.data;
      } catch (error) {
        this.alertType = 'error';
        this.alert = 'Some thing went wrong!';
        this.hasAlert = true;
      }
    },
  },
};
</script>
