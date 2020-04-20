<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title>
          <h1>Items Report</h1>
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
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
              <v-subheader>Item status:</v-subheader>
              <v-radio-group row v-model="status">
                <v-radio label="Active" :value="true"></v-radio>
                <v-radio label="Inactive" :value="false"></v-radio>
                <v-radio label="All" value="All"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs12 sm12 md6>
              <v-subheader>From</v-subheader>
              <v-date-picker  v-model="dateFrom" :max="maxDate" landscape></v-date-picker>
            </v-flex>
            <v-flex xs12 sm12 md6>
              <v-subheader>To</v-subheader>
              <v-date-picker  v-model="dateTo" :max="maxDate" landscape></v-date-picker>
            </v-flex>

          </v-layout>
        </v-card-text>
        <v-card-actions>
          <JsonExcel
            class="btn"
            :fetch="POST"
            :fields="json_fields"
            name="itemsReport.csv"
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
  mounted() {
    this.maxDate = this.$moment().format('YYYY-MM-DD');
  },
  validations: {
    dateFrom: { required },
    dateTo: { required, dateGreaterThan },

    orderBy: { required },
    status: { required },
  },
  components: {
    JsonExcel,
  },
  data() {
    return {
      maxDate: '',
      json_fields: {
        Id: 'id',
        Name: 'name',
        Description: 'description',
        Status: 'status',
        createdAt: 'createdAt',
        UpdatedAt: 'updatedAt',
      },
      orderByTypes: [
        { text: 'Name Ascending', value: 'name' },
        { text: 'Name Descending', value: 'name DESC' },
        { text: 'Status Ascending', value: 'status' },
        { text: 'Status Descending', value: 'status DESC' },
        { text: 'Created Date Ascending', value: 'createdAt' },
        { text: 'Created Date Descending', value: 'createdAt DESC' },
      ],
      orderBy: '',
      status: '',
      dateFrom: '',
      alertType: 'error',
      alert: 'Error while loading the data from API...',
      hasAlert: false,
      dateTo: '',
    };
  },
  methods: {
    async POST() {
      try {
        const formData = {
          from: this.dateFrom,
          to: this.dateTo,
          orderBy: this.orderBy,
          status: this.status,
        };
        if (this.$v.$invalid) {
          this.alertType = 'error';
          this.alert = 'Please fill all the required fields.';
          this.hasAlert = true;
          return;
        }

        const data = await this.$http.post('item/report', formData);
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
