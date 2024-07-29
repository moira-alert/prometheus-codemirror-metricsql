// Copyright 2022 The Prometheus Authors
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

import {styleTags, tags} from "@lezer/highlight";

export const promQLHighLight = styleTags({
    LineComment: tags.comment,
    LabelName: tags.labelName,
    StringLiteral: tags.string,
    NumberLiteral: tags.number,
    Duration: tags.number,
    Identifier: tags.variableName,
    'Abs Absent AbsentOverTime Acos Acosh Alias Asin Asinh Atan Atanh AvgOverTime Ceil Changes Clamp ClampMax ClampMin Cos Cosh CountOverTime DaysInMonth DayOfMonth DayOfWeek DayOfYear Deg Delta Deriv Exp Floor HistogramCount HistogramFraction HistogramQuantile HistogramSum HoltWinters Hour Idelta Increase Irate LabelReplace LabelJoin LastOverTime Ln Log10 Log2 MaxOverTime MinOverTime Minute Month Pi PredictLinear PresentOverTime QuantileOverTime Rad Rate Resets Round Scalar Sgn Sin Sinh Sort SortDesc Sqrt StddevOverTime StdvarOverTime SumOverTime Tan Tanh Time Timestamp Vector Year AggrOverTime AscentOverTime BitmapAnd BitmapOr BitmapXor BucketsLimit ChangesPrometheus CountEqOverTime CountGtOverTime CountLeOverTime CountNeOverTime DecreasesOverTime DefaultRollup DeltaPrometheus DerivFast DescentOverTime DistinctOverTime DropCommonLabels DurationOverTime FirstOverTime GeomeanOverTime HistogramAvg HistogramOverTime HistogramQuantiles HistogramShare HoeffdingBoundLower HoeffdingBoundUpper Ideriv IncreasePrometheus IncreasePure IncreasesOverTime Integrate Interpolate KeepLastValue KeepNextValue LabelCopy LabelDel LabelGraphiteGroup LabelKeep LabelLowercase LabelMap LabelMatch LabelMismatch LabelMove LabelSet LabelTransform LabelUppercase LabelValue Lag Lifetime LimitOffset MadOverTime MedianOverTime ModeOverTime Now PrometheusBuckets QuantilesOverTime Rand RandExponential RandNormal RangeAvg RangeFirst RangeLast RangeLinearRegression RangeMad RangeMax RangeMin RangeNormalize RangeOverTime RangeQuantile RangeStddev RangeStdvar RangeSum RangeTrimOutliers RangeTrimSpikes RangeTrimZscore RangeZscore RateOverSum RemoveResets Rollup RollupCandlestick RollupDelta RollupDeriv RollupIncrease RollupRate RollupScrapeInterval RunningAvg RunningMax RunningMin RunningSum ScrapeInterval ShareEqOverTime ShareGtOverTime ShareLeOverTime SmoothExponential SortByLabel SortByLabelDesc SortByLabelNumeric SortByLabelNumericDesc StaleSamplesOverTime Step Sum2OverTime TfirstOverTime TimestampWithName TimezoneOffset TlastChangeOverTime TlastOverTime TmaxOverTime TminOverTime Union ZscoreOverTime AvgDaily MedianDaily AvgWeekly MedianWeekly MedianWeeklyWithTrends': tags.function(tags.variableName),
    'Any Avg Bottomk Count Count_values Group Max Min Quantile Stddev Stdvar Sum Topk Any BottomkAvg BottomkLast BottomkMax BottomkMedian BottomkMin Distinct Geomean Histogram Limitk Mad Median Mode OutliersMad Outliersk Quantiles Share Sum2 TopkAvg TopkLast TopkMax TopkMedian TopkMin Zscore': tags.operatorKeyword,
    'By Without Bool On Ignoring GroupLeft GroupRight Offset Start End': tags.modifier,
    'And Unless Or': tags.logicOperator,
    'Sub Add Mul Mod Div Atan2 Eql Neq Lte Lss Gte Gtr EqlRegex EqlSingle NeqRegex Pow At': tags.operator,
    UnaryOp: tags.arithmeticOperator,
    '( )': tags.paren,
    '[ ]': tags.squareBracket,
    '{ }': tags.brace,
    '⚠': tags.invalid,
})
