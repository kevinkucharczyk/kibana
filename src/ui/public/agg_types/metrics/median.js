import _ from 'lodash';
import AggTypesMetricsMetricAggTypeProvider from 'ui/agg_types/metrics/MetricAggType';
import AggTypesMetricsGetResponseAggConfigClassProvider from 'ui/agg_types/metrics/getResponseAggConfigClass';
import AggTypesMetricsPercentilesProvider from 'ui/agg_types/metrics/percentiles';
export default function AggTypeMetricMaxProvider(Private) {
  var MetricAggType = Private(AggTypesMetricsMetricAggTypeProvider);
  var getResponseAggConfigClass = Private(AggTypesMetricsGetResponseAggConfigClassProvider);
  var percentiles = Private(AggTypesMetricsPercentilesProvider);

  return new MetricAggType({
    name: 'median',
    dslName: 'percentiles',
    title: 'Median',
    makeLabel: function (aggConfig) {
      return 'Median ' + aggConfig.params.field.displayName;
    },
    params: [
      {
        name: 'field',
        filterFieldTypes: 'number'
      },
      {
        name: 'percents',
        default: [50]
      }
    ],
    getResponseAggs: percentiles.getResponseAggs,
    getValue: percentiles.getValue
  });
};
