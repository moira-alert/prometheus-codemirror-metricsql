// Copyright 2021 The Prometheus Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  Abs,
  Absent,
  AbsentOverTime,
  Acos,
  Acosh,
  AggrOverTime,
  AscentOverTime,
  Asin,
  Asinh,
  Atan,
  Atanh,
  AvgOverTime,
  BitmapAnd,
  BitmapOr,
  BitmapXor,
  BucketsLimit,
  Ceil,
  Changes,
  ChangesPrometheus,
  Clamp,
  ClampMax,
  ClampMin,
  Cos,
  Cosh,
  CountEqOverTime,
  CountGtOverTime,
  CountLeOverTime,
  CountNeOverTime,
  CountOverTime,
  DayOfMonth,
  DayOfWeek,
  DayOfYear,
  DaysInMonth,
  DecreasesOverTime,
  DefaultRollup,
  Deg,
  Delta,
  DeltaPrometheus,
  Deriv,
  DerivFast,
  DescentOverTime,
  DistinctOverTime,
  DropCommonLabels,
  DurationOverTime,
  Exp,
  FirstOverTime,
  Floor,
  FunctionCall,
  GeomeanOverTime,
  HistogramAvg,
  HistogramCount,
  HistogramFraction,
  HistogramOverTime,
  HistogramQuantile,
  HistogramQuantiles,
  HistogramShare,
  HistogramStdDev,
  HistogramStdVar,
  HistogramSum,
  HoeffdingBoundLower,
  HoeffdingBoundUpper,
  HoltWinters,
  Hour,
  Idelta,
  Ideriv,
  Increase,
  IncreasePrometheus,
  IncreasePure,
  IncreasesOverTime,
  Integrate,
  Interpolate,
  Irate,
  KeepLastValue,
  KeepNextValue,
  LabelCopy,
  LabelDel,
  LabelGraphiteGroup,
  LabelJoin,
  LabelKeep,
  LabelLowercase,
  LabelMap,
  LabelMatch,
  LabelMismatch,
  LabelMove,
  LabelReplace,
  LabelSet,
  LabelTransform,
  LabelUppercase,
  LabelValue,
  Lag,
  LastOverTime,
  Lifetime,
  LimitOffset,
  Ln,
  Log10,
  Log2,
  MadOverTime,
  MaxOverTime,
  MedianOverTime,
  MinOverTime,
  Minute,
  ModeOverTime,
  Month,
  Now,
  Pi,
  PredictLinear,
  PresentOverTime,
  PrometheusBuckets,
  QuantileOverTime,
  QuantilesOverTime,
  Rad,
  Rand,
  RandExponential,
  RandNormal,
  RangeAvg,
  RangeFirst,
  RangeLast,
  RangeLinearRegression,
  RangeMad,
  RangeMax,
  RangeMin,
  RangeNormalize,
  RangeOverTime,
  RangeQuantile,
  RangeStddev,
  RangeStdvar,
  RangeSum,
  RangeTrimOutliers,
  RangeTrimSpikes,
  RangeTrimZscore,
  RangeZscore,
  RateOverSum,
  RemoveResets,
  Rollup,
  RollupCandlestick,
  RollupDelta,
  RollupDeriv,
  RollupIncrease,
  RollupRate,
  RollupScrapeInterval,
  RunningAvg,
  RunningMax,
  RunningMin,
  RunningSum,
  ScrapeInterval,
  ShareEqOverTime,
  ShareGtOverTime,
  ShareLeOverTime,
  SmoothExponential,
  SortByLabel,
  SortByLabelDesc,
  SortByLabelNumeric,
  SortByLabelNumericDesc,
  StaleSamplesOverTime,
  Step,
  TfirstOverTime,
  TimestampWithName,
  TimezoneOffset,
  TlastChangeOverTime,
  TlastOverTime,
  TmaxOverTime,
  TminOverTime,
  Union,
  Rate,
  Resets,
  Round,
  Scalar,
  Sgn,
  Sin,
  Sinh,
  Sort,
  SortDesc,
  Sqrt,
  StddevOverTime,
  StdvarOverTime,
  Sum2OverTime,
  SumOverTime,
  Tan,
  Tanh,
  Time,
  Timestamp,
  Vector,
  Year,
  ZscoreOverTime,
  AvgDaily,
  MedianDaily,
  AvgWeekly,
  MedianWeekly,
  MedianWeeklyWithTrends,
} from '@clavinjune/lezer-metricsql';

export enum ValueType {
  none = 'none',
  vector = 'vector',
  scalar = 'scalar',
  matrix = 'matrix',
  string = 'string',
}

export interface PromQLFunction {
  name: string;
  argTypes: ValueType[];
  variadic: number;
  returnType: ValueType;
}

// promqlFunctions is a list of all functions supported by PromQL, including their types.
// Based on https://github.com/prometheus/prometheus/blob/master/promql/parser/functions.go#L26
const promqlFunctions: { [key: number]: PromQLFunction } = {
  [Abs]: {
    name: 'abs',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Absent]: {
    name: 'absent',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [AbsentOverTime]: {
    name: 'absent_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Acos]: {
    name: 'acos',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Acosh]: {
    name: 'acosh',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Asin]: {
    name: 'asin',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Asinh]: {
    name: 'asinh',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Atan]: {
    name: 'atan',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Atanh]: {
    name: 'atanh',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [AvgOverTime]: {
    name: 'avg_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Ceil]: {
    name: 'ceil',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Changes]: {
    name: 'changes',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Clamp]: {
    name: 'clamp',
    argTypes: [ValueType.vector, ValueType.scalar, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [ClampMax]: {
    name: 'clamp_max',
    argTypes: [ValueType.vector, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [ClampMin]: {
    name: 'clamp_min',
    argTypes: [ValueType.vector, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Cos]: {
    name: 'cos',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Cosh]: {
    name: 'Cosh',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [CountOverTime]: {
    name: 'count_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [DaysInMonth]: {
    name: 'days_in_month',
    argTypes: [ValueType.vector],
    variadic: 1,
    returnType: ValueType.vector,
  },
  [DayOfMonth]: {
    name: 'day_of_month',
    argTypes: [ValueType.vector],
    variadic: 1,
    returnType: ValueType.vector,
  },
  [DayOfWeek]: {
    name: 'day_of_week',
    argTypes: [ValueType.vector],
    variadic: 1,
    returnType: ValueType.vector,
  },
  [DayOfYear]: {
    name: 'day_of_year',
    argTypes: [ValueType.vector],
    variadic: 1,
    returnType: ValueType.vector,
  },
  [Deg]: {
    name: 'deg',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Delta]: {
    name: 'delta',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Deriv]: {
    name: 'deriv',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Exp]: {
    name: 'exp',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Floor]: {
    name: 'floor',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [HistogramCount]: {
    name: 'histogram_count',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [HistogramFraction]: {
    name: 'histogram_fraction',
    argTypes: [ValueType.scalar, ValueType.scalar, ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [HistogramQuantile]: {
    name: 'histogram_quantile',
    argTypes: [ValueType.scalar, ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [HistogramStdDev]: {
    name: 'histogram_stddev',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [HistogramStdVar]: {
    name: 'histogram_stdvar',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [HistogramSum]: {
    name: 'histogram_sum',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [HoltWinters]: {
    name: 'holt_winters',
    argTypes: [ValueType.matrix, ValueType.scalar, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Hour]: {
    name: 'hour',
    argTypes: [ValueType.vector],
    variadic: 1,
    returnType: ValueType.vector,
  },
  [Idelta]: {
    name: 'idelta',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Increase]: {
    name: 'increase',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Irate]: {
    name: 'irate',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [LabelReplace]: {
    name: 'label_replace',
    argTypes: [ValueType.vector, ValueType.string, ValueType.string, ValueType.string, ValueType.string],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [LabelJoin]: {
    name: 'label_join',
    argTypes: [ValueType.vector, ValueType.string, ValueType.string, ValueType.string],
    variadic: -1,
    returnType: ValueType.vector,
  },
  [LastOverTime]: {
    name: 'last_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Ln]: {
    name: 'ln',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Log10]: {
    name: 'log10',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Log2]: {
    name: 'log2',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [MaxOverTime]: {
    name: 'max_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [MinOverTime]: {
    name: 'min_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Minute]: {
    name: 'minute',
    argTypes: [ValueType.vector],
    variadic: 1,
    returnType: ValueType.vector,
  },
  [Month]: {
    name: 'month',
    argTypes: [ValueType.vector],
    variadic: 1,
    returnType: ValueType.vector,
  },
  [Pi]: {
    name: 'pi',
    argTypes: [],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [PredictLinear]: {
    name: 'predict_linear',
    argTypes: [ValueType.matrix, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [PresentOverTime]: {
    name: 'present_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [QuantileOverTime]: {
    name: 'quantile_over_time',
    argTypes: [ValueType.scalar, ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Rad]: {
    name: 'rad',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Rate]: {
    name: 'rate',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Resets]: {
    name: 'resets',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Round]: {
    name: 'round',
    argTypes: [ValueType.vector, ValueType.scalar],
    variadic: 1,
    returnType: ValueType.vector,
  },
  [Scalar]: {
    name: 'scalar',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.scalar,
  },
  [Sgn]: {
    name: 'sgn',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Sin]: {
    name: 'sin',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Sinh]: {
    name: 'Sinh',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Sort]: {
    name: 'sort',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [SortDesc]: {
    name: 'sort_desc',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Sqrt]: {
    name: 'sqrt',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [StddevOverTime]: {
    name: 'stddev_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [StdvarOverTime]: {
    name: 'stdvar_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [SumOverTime]: {
    name: 'sum_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Tan]: {
    name: 'tan',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Tanh]: {
    name: 'tanh',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Time]: {
    name: 'time',
    argTypes: [],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Timestamp]: {
    name: 'timestamp',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Vector]: {
    name: 'vector',
    argTypes: [ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Year]: {
    name: 'year',
    argTypes: [ValueType.vector],
    variadic: 1,
    returnType: ValueType.vector,
  },
  // metricsql
  [AggrOverTime]: {
    // ToDo, support multiplefunction
    // https://github.com/VictoriaMetrics/VictoriaMetrics/blob/71668637ce7657a09759b1e375d49093bff9672a/app/vmselect/promql/exec_test.go#L7724-L7756
    name: 'aggr_over_time',
    argTypes: [ValueType.string, ValueType.matrix],
    variadic: -1,
    returnType: ValueType.vector,
  },
  [AscentOverTime]: {
    name: 'ascent_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [BitmapAnd]: {
    name: 'bitmap_and',
    argTypes: [ValueType.vector, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [BitmapOr]: {
    name: 'bitmap_or',
    argTypes: [ValueType.vector, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [BitmapXor]: {
    name: 'bitmap_xor',
    argTypes: [ValueType.vector, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [BucketsLimit]: {
    name: 'buckets_limit',
    argTypes: [ValueType.scalar, ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [ChangesPrometheus]: {
    name: 'changes_prometheus',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [CountEqOverTime]: {
    name: 'count_eq_over_time',
    argTypes: [ValueType.matrix, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [CountGtOverTime]: {
    name: 'count_gt_over_time',
    argTypes: [ValueType.matrix, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [CountLeOverTime]: {
    name: 'count_le_over_time',
    argTypes: [ValueType.matrix, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [CountNeOverTime]: {
    name: 'count_ne_over_time',
    argTypes: [ValueType.matrix, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [DecreasesOverTime]: {
    name: 'decreases_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [DefaultRollup]: {
    name: 'default_rollup',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [DeltaPrometheus]: {
    name: 'default_rollup',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [DerivFast]: {
    name: 'deriv_fast',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [DescentOverTime]: {
    name: 'descent_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [DistinctOverTime]: {
    name: 'distinct_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [DropCommonLabels]: {
    name: 'drop_common_labels',
    argTypes: [ValueType.vector, ValueType.string],
    variadic: -1,
    returnType: ValueType.vector,
  },
  [DurationOverTime]: {
    name: 'duration_over_time',
    argTypes: [ValueType.matrix, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [FirstOverTime]: {
    name: 'first_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [GeomeanOverTime]: {
    name: 'geomean_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [HistogramAvg]: {
    name: 'histogram_avg',
    argTypes: [ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [HistogramOverTime]: {
    name: 'histogram_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [HistogramShare]: {
    name: 'histogram_share',
    argTypes: [ValueType.scalar, ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [HoeffdingBoundLower]: {
    name: 'hoeffding_bound_lower',
    argTypes: [ValueType.scalar, ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [HoeffdingBoundUpper]: {
    name: 'hoeffding_bound_upper',
    argTypes: [ValueType.scalar, ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [HoltWinters]: {
    name: 'holt_winters',
    argTypes: [ValueType.matrix, ValueType.scalar, ValueType.scalar],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [Ideriv]: {
    name: 'ideriv',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [IncreasePrometheus]: {
    name: 'increase_prometheus',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [IncreasePure]: {
    name: 'increase_pure',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [IncreasesOverTime]: {
    name: 'increases_over_time',
    argTypes: [ValueType.matrix],
    variadic: 0,
    returnType: ValueType.vector,
  },
  // todo
  [LabelMove]: {
    name: 'label_move',
    argTypes: [ValueType.vector, ValueType.string],
    variadic: -1,
    returnType: ValueType.vector,
  },
  [LabelSet]: {
    name: 'label_set',
    argTypes: [ValueType.vector, ValueType.string],
    variadic: -1,
    returnType: ValueType.vector,
  },
  [Now]: {
    name: 'now',
    argTypes: [],
    variadic: 0,
    returnType: ValueType.scalar,
  },
  [Rand]: {
    name: 'rand',
    argTypes: [ValueType.scalar],
    variadic: 1,
    returnType: ValueType.vector,
  },
  // custom transform function
  [AvgDaily]: {
    name: 'avg_daily',
    argTypes: [ValueType.scalar, ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [MedianDaily]: {
    name: 'median_daily',
    argTypes: [ValueType.scalar, ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [AvgWeekly]: {
    name: 'avg_weekly',
    argTypes: [ValueType.scalar, ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [MedianWeekly]: {
    name: 'median_weekly',
    argTypes: [ValueType.scalar, ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
  [MedianWeeklyWithTrends]: {
    name: 'median_weekly_with_trends',
    argTypes: [ValueType.scalar, ValueType.vector],
    variadic: 0,
    returnType: ValueType.vector,
  },
};

export function getFunction(id: number): PromQLFunction {
  return promqlFunctions[id];
}

export function isFunctionBypassed(id: number): boolean {
  return id === HistogramQuantiles ||
    id === Integrate ||
    id === Interpolate ||
    id === KeepLastValue ||
    id === KeepNextValue ||
    id === LabelCopy ||
    id === LabelDel ||
    id === LabelGraphiteGroup ||
    id === LabelKeep ||
    id === LabelLowercase ||
    id === LabelMap ||
    id === LabelMatch ||
    id === LabelMismatch ||
    id === LabelTransform ||
    id === LabelUppercase ||
    id === LabelValue ||
    id === Lag ||
    id === Lifetime ||
    id === LimitOffset ||
    id === MadOverTime ||
    id === MedianOverTime ||
    id === ModeOverTime ||
    id === PrometheusBuckets ||
    id === QuantilesOverTime ||
    id === RandExponential ||
    id === RandNormal ||
    id === RangeAvg ||
    id === RangeFirst ||
    id === RangeLast ||
    id === RangeLinearRegression ||
    id === RangeMad ||
    id === RangeMax ||
    id === RangeMin ||
    id === RangeNormalize ||
    id === RangeOverTime ||
    id === RangeQuantile ||
    id === RangeStddev ||
    id === RangeStdvar ||
    id === RangeSum ||
    id === RangeTrimOutliers ||
    id === RangeTrimSpikes ||
    id === RangeTrimZscore ||
    id === RangeZscore ||
    id === RateOverSum ||
    id === RemoveResets ||
    id === Rollup ||
    id === RollupCandlestick ||
    id === RollupDelta ||
    id === RollupDeriv ||
    id === RollupIncrease ||
    id === RollupRate ||
    id === RollupScrapeInterval ||
    id === RunningAvg ||
    id === RunningMax ||
    id === RunningMin ||
    id === RunningSum ||
    id === ScrapeInterval ||
    id === ShareEqOverTime ||
    id === ShareGtOverTime ||
    id === ShareLeOverTime ||
    id === SmoothExponential ||
    id === SortByLabel ||
    id === SortByLabelDesc ||
    id === SortByLabelNumeric ||
    id === SortByLabelNumericDesc ||
    id === StaleSamplesOverTime ||
    id === Step ||
    id === Sum2OverTime ||
    id === TfirstOverTime ||
    id === TimestampWithName ||
    id === TimezoneOffset ||
    id === TlastChangeOverTime ||
    id === TlastOverTime ||
    id === TmaxOverTime ||
    id === TminOverTime ||
    id === Union ||
    id === ZscoreOverTime
}
