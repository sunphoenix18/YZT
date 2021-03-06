﻿// **********************************************************************
// This file was generated by a TAF parser!
// TAF version 4.2.2 by TAF Team.
// Generated from `./Common.jce'
// **********************************************************************

var assert    = require('assert');
var TafStream = require('@taf/taf-stream');

if(TafStream.JceStruct == undefined){
TafStream.JceStruct = function() {
this._jce_double_precision_ = -1;
}
TafStream.JceStruct.prototype.setPrecision = function(d) {
if ((d == -1) || (d >= 0 && d <= 15)) {
this._jce_double_precision_ = d;
return true;
}
return false;
}
TafStream.JceStruct.prototype.resetPrecision = function() { this._jce_double_precision_ = -1;}
TafStream.JceStruct.prototype.hasSetPrecision = function() { return (this._jce_double_precision_ >= 0 && this._jce_double_precision_ <= 15);}
TafStream.JceStruct.prototype.getPrecision = function() { return this._jce_double_precision_; }
}



var HQSys = HQSys || {};
module.exports.HQSys = HQSys;

HQSys.HISTORY_DATA_TYPE = {
    HDT_DAY_KLINE : 0,
    HDT_MIN1_KLINE : 1,
    HDT_MIN5_KLINE : 2,
    HDT_MIN15_KLINE : 3,
    HDT_MIN30_KLINE : 4,
    HDT_MIN60_KLINE : 5,
    HDT_RTMIN : 6,
    HDT_WEEK_KLINE : 7,
    HDT_MONTH_KLINE : 8,
    HDT_SEASON_KLINE : 9,
    HDT_YEAR_KLINE : 10,
    HDT_DAY_MONEYFLOW : 11,
    HDT_TICK : 12,
    HDT_WEEK_MONEYFLOW : 13,
    HDT_MONTH_MONEYFLOW : 14,
    HDT_SEASON_MONEYFLOW : 15,
    HDT_YEAR_MONEYFLOW : 16,
    HDT_FLOW_MIN1 : 17,
    HDT_FLOW_MIN5 : 18,
    HDT_FLOW_MIN15 : 19,
    HDT_FLOW_MIN30 : 20,
    HDT_FLOW_MIN60 : 21
};
HQSys.HISTORY_DATA_TYPE._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.HISTORY_DATA_TYPE._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_STOCK_TYPE_SUMMARAY = {
    ESTS_ALL : 0,
    ESTS_STOCK : 1,
    ESTS_BLOCK : 2,
    ESTS_ZHISHU : 3
};
HQSys.E_STOCK_TYPE_SUMMARAY._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_STOCK_TYPE_SUMMARAY._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_BLOCK_TYPE = {
    EBT_BK_ALL : 0,
    EBT_BK_HY : 22,
    EBT_BK_DQ : 23,
    EBT_BK_GN : 24
};
HQSys.E_BLOCK_TYPE._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_BLOCK_TYPE._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_STOCK_CATEGORY = {
    STKC_SH_ZS : 1,
    STKC_SH_AG : 2,
    STKC_SH_BG : 3,
    STKC_SH_ZQ : 4,
    STKC_SZ_ZS : 5,
    STKC_SZ_AG : 6,
    STKC_SZ_BG : 7,
    STKC_SZ_ZQ : 8,
    STKC_SH_JJ : 9,
    STKC_SZ_JJ : 10,
    STKC_SH_QZ : 11,
    STKC_SZ_QZ : 12,
    STKC_SZ_SM : 13,
    STKC_NO_LO : 14,
    STKC_SH_ZS_IM9 : 15,
    STKC_SH_ZS_IM6 : 16,
    STKC_SZ_ALL_AG : 17,
    STKC_AH : 20,
    STKC_SH_TS : 18,
    STKC_SH_FX : 19,
    STKC_SZ_TS : 21,
    STKC_BK_HY : 22,
    STKC_BK_DQ : 23,
    STKC_BK_GN : 24,
    STKC_QH : 31,
    STKC_FOREX : 32,
    STKC_GWQH : 33,
    STKC_ALL_AG : 40,
    STKC_ALL_QZ : 41,
    STKC_ALL_ZQ : 42,
    STKC_SZ_CY : 80,
    STKC_SZ_SB : 81,
    STKC_UNKNOWN : 99,
    STKC_HK : 101,
    STKC_QH_ZSQQ : 165,
    STKC_QH_ZSQQ_C : 166,
    STKC_QH_ZSQQ_P : 167,
    STKC_QH_GZQH : 168,
    STKC_QH_TBQH : 169,
    STKC_QH_ALL : 170,
    STKC_SH_ISP : 171,
    STKC_SH_OPTION : 172,
    STKC_SH_OPTION_C : 173,
    STKC_SH_OPTION_P : 174,
    STKC_M_OTHER : 200,
    STKC_M_FOREX : 201,
    STKC_M_FUTURES : 202,
    STKC_M_METAL : 203,
    STKC_M_INDEX : 204,
    STKC_M_FUND : 205,
    STKC_M_HK : 206,
    STKC_M_US : 207,
    STKC_M_XSB : 208
};
HQSys.E_STOCK_CATEGORY._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_STOCK_CATEGORY._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_MARKET_CODE = {
    E_MARKET_SZ : 0,
    E_MARKET_SH : 1,
    E_MARKET_HK : 2,
    E_MARKET_SF : 3,
    E_MARKET_SC : 4,
    E_MARKET_DC : 5,
    E_MARKET_ZC : 6,
    E_MARKET_BH : 7,
    E_MARKET_SJ : 8,
    E_MARKET_LDJ : 9,
    E_MARKET_TJ : 10,
    E_MARKET_DY : 11,
    E_MARKET_GJ : 12,
    E_MARKET_NASDAQ : 13,
    E_MARKET_NYSE : 14,
    E_MARKET_AMEX : 15,
    E_MARKET_HSI : 16,
    E_MARKET_USI : 17,
    E_MARKET_NK225 : 18,
    E_MARKET_KOSPI : 19,
    E_MARKET_TWII : 20,
    E_MARKET_STI : 21,
    E_MARKET_KLSE : 22,
    E_MARKET_SETI : 23,
    E_MARKET_JKSE : 24,
    E_MARKET_AORD : 25,
    E_MARKET_NZSE : 26,
    E_MARKET_SENSEX : 27,
    E_MARKET_GSPTSE : 28,
    E_MARKET_USD : 29,
    E_MARKET_CAC : 30,
    E_MARKET_DAX : 31,
    E_MARKET_AEX : 32,
    E_MARKET_OMX20 : 33,
    E_MARKET_BFX : 34,
    E_MARKET_SSMI : 35,
    E_MARKET_IBOVESPA : 36,
    E_MARKET_RTS : 37,
    E_MARKET_MIB : 38,
    E_MARKET_FX : 39,
    E_MARKET_FTSE : 40,
    E_MARKET_COMEX : 41,
    E_MARKET_LME : 42,
    E_MARKET_NYMEX : 43,
    E_MARKET_CBOT : 44,
    E_MARKET_IPE : 45,
    E_MARKET_FUND : 46,
    E_MARKET_TB : 47,
    E_MARKET_CNY : 48,
    E_MARKET_XS : 49
};
HQSys.E_MARKET_CODE._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_MARKET_CODE._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_SC_CATEGORY = {
    E_SC_AU : 1,
    E_SC_AG : 2,
    E_SC_AL : 3,
    E_SC_BU : 4,
    E_SC_CU : 5,
    E_SC_FU : 6,
    E_SC_HC : 7,
    E_SC_PB : 8,
    E_SC_RB : 9,
    E_SC_RU : 10,
    E_SC_WR : 11,
    E_SC_ZN : 12,
    E_SC_NI : 13,
    E_SC_SN : 14
};
HQSys.E_SC_CATEGORY._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_SC_CATEGORY._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_DC_CATEGORY = {
    E_DC_BB : 1,
    E_DC_FB : 2,
    E_DC_A : 3,
    E_DC_B : 4,
    E_DC_C : 5,
    E_DC_I : 6,
    E_DC_JD : 7,
    E_DC_JM : 8,
    E_DC_L : 9,
    E_DC_M : 10,
    E_DC_P : 11,
    E_DC_PP : 12,
    E_DC_V : 13,
    E_DC_Y : 14,
    E_DC_J : 17,
    E_DC_CS : 18
};
HQSys.E_DC_CATEGORY._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_DC_CATEGORY._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_ZC_CATEGORY = {
    E_ZC_CF : 2,
    E_ZC_FG : 3,
    E_ZC_JR : 4,
    E_ZC_LR : 5,
    E_ZC_MA : 6,
    E_ZC_OI : 8,
    E_ZC_PM : 9,
    E_ZC_RI : 10,
    E_ZC_RM : 11,
    E_ZC_RS : 12,
    E_ZC_SM : 14,
    E_ZC_SF : 13,
    E_ZC_SR : 15,
    E_ZC_TA : 16,
    E_ZC_TC : 17,
    E_ZC_WH : 18
};
HQSys.E_ZC_CATEGORY._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_ZC_CATEGORY._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_HK_CATEGORY = {
    E_HK_ZQ : 66,
    E_HK_NXZ : 67,
    E_HK_JJ : 70,
    E_HK_CYB : 71,
    E_HK_ZB : 77,
    E_HK_QZ : 87
};
HQSys.E_HK_CATEGORY._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_HK_CATEGORY._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_TB_CATEGORY = {
    E_TB_LW : 1,
    E_TB_XYZR_A : 2,
    E_TB_ZSZR_A : 3,
    E_TB_XYZR_B : 4,
    E_TB_ZSZR_B : 5,
    E_TB_ZS : 6,
    E_TB_YZB : 7,
    E_TB_DSC : 8,
    E_TB_DGP : 9
};
HQSys.E_TB_CATEGORY._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_TB_CATEGORY._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_BUSS_TYPE = {
    EBT_A : 6,
    EBT_B : 7,
    EBT_JJ : 9,
    EBT_SH_A : 0,
    EBT_SH_B : 1,
    EBT_SH_ZQ : 4,
    EBT_SZ_A : 2,
    EBT_SZ_B : 3,
    EBT_SZ_CY : 18,
    EBT_SZ_SM : 12,
    EBT_SZ_ZQ : 5,
    EBT_ZQ : 8,
    EBT_BLK_HY : 32,
    EBT_BLK_DY : 31,
    EBT_BLK_GN : 33,
    EBT_BLK_ALL : 30,
    EBT_ZS_BK : 11,
    EBT_QZ : 17,
    EBT_ZJ : 23,
    EBT_SH_JJ : 9100,
    EBT_SZ_JJ : 9101,
    EBT_ZS : 10422,
    EBT_SH_ZS : 10423,
    EBT_SZ_ZS : 10424,
    EBT_M_BH : 19,
    EBT_M_TG : 26,
    EBT_M_SHJ : 24,
    EBT_M_GJJ : 25,
    EBT_M_DS : 20,
    EBT_M_ZS : 21,
    EBT_M_SQ : 22,
    EBT_M_DY : 34,
    EBT_M_GJ : 35,
    EBT_M_HSI : 49,
    EBT_M_US : 50,
    EBT_M_NASDAQ : 51,
    EBT_M_NYSE : 52,
    EBT_M_AMEX : 53,
    EBT_M_USI : 54,
    EBT_M_XS : 10500,
    EBT_M_FUND : 10350,
    EBT_M_CBOT : 10400,
    EBT_M_COMEX : 10401,
    EBT_M_NYMEX : 10402,
    EBT_M_LME : 10403,
    EBT_M_FX : 10410,
    EBT_M_CNY : 10412,
    EBT_T_HK : 36,
    EBT_T_HK_ZB : 37,
    EBT_T_HK_CYB : 38,
    EBT_T_HK_ZQ : 39,
    EBT_T_HK_QZ : 41,
    EBT_T_HK_NXZ : 42,
    EBT_T_HK_JJ : 43,
    EBT_T_SC_CU : 10000,
    EBT_T_SC_AL : 10001,
    EBT_T_SC_ZN : 10002,
    EBT_T_SC_PB : 10003,
    EBT_T_SC_AU : 10004,
    EBT_T_SC_AG : 10005,
    EBT_T_SC_RB : 10006,
    EBT_T_SC_RU : 10007,
    EBT_T_SC_FU : 10008,
    EBT_T_SC_WR : 10009,
    EBT_T_SC_BU : 10010,
    EBT_T_SC_HC : 10011,
    EBT_T_SC_NI : 10012,
    EBT_T_SC_SN : 10013,
    EBT_T_DC_A : 10100,
    EBT_T_DC_M : 10101,
    EBT_T_DC_Y : 10102,
    EBT_T_DC_P : 10103,
    EBT_T_DC_C : 10104,
    EBT_T_DC_I : 10105,
    EBT_T_DC_JM : 10106,
    EBT_T_DC_J : 10107,
    EBT_T_DC_L : 10108,
    EBT_T_DC_V : 10109,
    EBT_T_DC_B : 10110,
    EBT_T_DC_JD : 10111,
    EBT_T_DC_FB : 10112,
    EBT_T_DC_BB : 10113,
    EBT_T_DC_PP : 10114,
    EBT_T_DC_CS : 10115,
    EBT_T_ZC_WH : 10200,
    EBT_T_ZC_OI : 10201,
    EBT_T_ZC_CF : 10202,
    EBT_T_ZC_SR : 10203,
    EBT_T_ZC_RI : 10204,
    EBT_T_ZC_TC : 10205,
    EBT_T_ZC_TA : 10206,
    EBT_T_ZC_FG : 10207,
    EBT_T_ZC_MA : 10208,
    EBT_T_ZC_RM : 10209,
    EBT_T_ZC_RS : 10210,
    EBT_T_ZC_PM : 10211,
    EBT_T_ZC_JR : 10212,
    EBT_T_ZC_LR : 10213,
    EBT_T_ZC_SM : 10214,
    EBT_T_ZC_SF : 10215,
    EBT_TB : 10438,
    EBT_TB_ZS : 10439,
    EBT_TB_ZSZR : 10440,
    EBT_TB_XYZR : 10441,
    EBT_TB_LW : 10442,
    EBT_TB_DSC : 10443,
    EBT_TB_DGP : 10444,
    EBT_TB_YZB : 10445
};
HQSys.E_BUSS_TYPE._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_BUSS_TYPE._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_SORT_METHOD = {
    E_SORT_DEFAULT : 0,
    E_SORT_ASCEND : 1,
    E_SORT_DESCEN : 2
};
HQSys.E_SORT_METHOD._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_SORT_METHOD._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_MF_RANK_DAY = {
    EMR_DAY_1 : 1,
    EMR_DAY_3 : 3,
    EMR_DAY_5 : 5,
    EMR_DAY_10 : 10
};
HQSys.E_MF_RANK_DAY._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_MF_RANK_DAY._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_MF_RANK_SORT_COLUMN = {
    EMRC_CODE : 1,
    EMRC_NAME : 2,
    EMRC_NOWPRICE : 3,
    EMRC_CHG : 4,
    EMRC_CHANGE : 5,
    EMRC_DAY_ZLLR : 6,
    EMRC_DAY_ZLZB : 7,
    EMRC_DAY_SHLR : 8,
    EMRC_DAY_SHZB : 9,
    EMRC_DAY_CDDZJLR : 10,
    EMRC_DAY_CDDZJZB : 11,
    EMRC_DAY_DDZJLR : 12,
    EMRC_DAY_DDZJZB : 13,
    EMRC_DAY_ZDZJLR : 14,
    EMRC_DAY_ZDZJZB : 15,
    EMRC_DAY_XDZJLR : 16,
    EMRC_DAY_XDZJZB : 17,
    EMRC_3DAY_ZLLR : 18,
    EMRC_3DAY_ZLZB : 19,
    EMRC_3DAY_SHLR : 20,
    EMRC_3DAY_SHZB : 21,
    EMRC_3DAY_CDDZJLR : 22,
    EMRC_3DAY_CDDZJZB : 23,
    EMRC_3DAY_DDZJLR : 24,
    EMRC_3DAY_DDZJZB : 25,
    EMRC_3DAY_ZDZJLR : 26,
    EMRC_3DAY_ZDZJZB : 27,
    EMRC_3DAY_XDZJLR : 28,
    EMRC_3DAY_XDZJZB : 29,
    EMRC_5DAY_ZLLR : 30,
    EMRC_5DAY_ZLZB : 31,
    EMRC_5DAY_SHLR : 32,
    EMRC_5DAY_SHZB : 33,
    EMRC_5DAY_CDDZJLR : 34,
    EMRC_5DAY_CDDZJZB : 35,
    EMRC_5DAY_DDZJLR : 36,
    EMRC_5DAY_DDZJZB : 37,
    EMRC_5DAY_ZDZJLR : 38,
    EMRC_5DAY_ZDZJZB : 39,
    EMRC_5DAY_XDZJLR : 40,
    EMRC_5DAY_XDZJZB : 41,
    EMRC_10DAY_ZLLR : 42,
    EMRC_10DAY_ZLZB : 43,
    EMRC_10DAY_SHLR : 44,
    EMRC_10DAY_SHZB : 45,
    EMRC_10DAY_CDDZJLR : 46,
    EMRC_10DAY_CDDZJZB : 47,
    EMRC_10DAY_DDZJLR : 48,
    EMRC_10DAY_DDZJZB : 49,
    EMRC_10DAY_ZDZJLR : 50,
    EMRC_10DAY_ZDZJZB : 51,
    EMRC_10DAY_XDZJLR : 52,
    EMRC_10DAY_XDZJZB : 53
};
HQSys.E_MF_RANK_SORT_COLUMN._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_MF_RANK_SORT_COLUMN._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_DDERANK_SORT_COLUMN = {
    E_DDERANK_CODE : 1,
    E_DDERANK_NAME : 2,
    E_DDERANK_NOWPRICE : 3,
    E_DDERANK_CHG : 4,
    E_DDERANK_TURNOVERRATE : 5,
    E_DDERANK_DDX : 6,
    E_DDERANK_DDY : 7,
    E_DDERANK_DDZ : 8,
    E_DDERANK_DDF : 9,
    E_DDERANK_DDX5 : 10,
    E_DDERANK_DDY5 : 11,
    E_DDERANK_DDX60 : 12,
    E_DDERANK_DDY60 : 13
};
HQSys.E_DDERANK_SORT_COLUMN._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_DDERANK_SORT_COLUMN._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_STOCK_ORDER_TYPE = {
    E_STOCK_SUPER_BUY : 0,
    E_STOCK_SUPER_SELL : 1,
    E_STOCK_UP_STOP : 2,
    E_STOCK_DOWN_STOP : 3,
    E_STOCK_OPEN_UP_STOP : 4,
    E_STOCK_OPEN_DOWN_STOP : 5,
    E_STOCK_POST_LARGE_BUY : 6,
    E_STOCK_POST_LARGE_SELL : 7,
    E_STOCK_SUPER_LARGE_BUY : 8,
    E_STOCK_SUPER_LARGE_SELL : 9,
    E_STOCK_LARGE_BUY_IN : 14,
    E_STOCK_LAGRGE_SELL_OUT : 15,
    E_STOCK_BUY_FEN_DAN : 16,
    E_STOCK_SELL_FEN_DAN : 17,
    E_STOCK_ROCKET_RUSH : 22,
    E_STOCK_QUICK_BUCKUP : 23,
    E_STOCK_HIGH_DIVING : 24,
    E_STOCK_QUICK_DOWN : 25,
    E_STOCK_CANCEL_BUY : 26,
    E_STOCK_CANCEL_SELL : 27
};
HQSys.E_STOCK_ORDER_TYPE._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_STOCK_ORDER_TYPE._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_SZFY_ORDER_TYPE = {
    E_SZFY_TIMES : 0,
    E_SZFY_VOL : 1,
    E_SZFY_AMT : 2
};
HQSys.E_SZFY_ORDER_TYPE._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_SZFY_ORDER_TYPE._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_HQ_SORT_COLUMN = {
    E_HQ_COLUMN_CODE : 1,
    E_HQ_COLUMN_NAME : 2,
    E_HQ_COLUMN_YCLOSE : 3,
    E_HQ_COLUMN_OPEN : 4,
    E_HQ_COLUMN_HIGH : 5,
    E_HQ_COLUMN_LOW : 6,
    E_HQ_COLUMN_NOWPRICE : 7,
    E_HQ_COLUMN_BUY : 8,
    E_HQ_COLUMN_SELL : 9,
    E_HQ_COLUMN_VOLUME : 10,
    E_HQ_COLUMN_AMOUNT : 11,
    E_HQ_COLUMN_CURVOL : 12,
    E_HQ_COLUMN_CHANGE : 13,
    E_HQ_COLUMN_CHG : 14,
    E_HQ_COLUMN_AMPLITUDE : 15,
    E_HQ_COLUMN_AVGPRICE : 16,
    E_HQ_COLUMN_PREOPENINTEREST : 17,
    E_HQ_COLUMN_PRESETTLEMENTPRICE : 18,
    E_HQ_COLUMN_OPENINTEREST : 19,
    E_HQ_COLUMN_TURNOVERRATE : 20,
    E_HQ_COLUMN_PERATIO : 21,
    E_HQ_COLUMN_TOTALMARKETVALUE : 22,
    E_HQ_COLUMN_LIANGBI : 23,
    E_HQ_COLUMN_WEIBI : 24
};
HQSys.E_HQ_SORT_COLUMN._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_HQ_SORT_COLUMN._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
HQSys.E_AH_SORT_COLUMN = {
    E_AH_PREMIUMRATE : 1,
    E_AH_ACODE : 2,
    E_AH_ANAME : 3,
    E_AH_ANOWPRICE : 4,
    E_AH_ACHG : 5,
    E_AH_ACURMARKETVALUE : 6,
    E_AH_ATURNOVERRATE : 7,
    E_AH_ATOTALHAND : 8,
    E_AH_AOWNINDUSTRY : 9,
    E_AH_HCODE : 10,
    E_AH_HNAME : 11,
    E_AH_HNOWPRICE : 12,
    E_AH_HCHG : 13,
    E_AH_HCURMARKETVALUE : 14,
    E_AH_HTURNOVERRATE : 15,
    E_AH_HTOTALHAND : 16,
    E_AH_HOWNINDUSTRY : 17
};
HQSys.E_AH_SORT_COLUMN._write = function(os, tag, val) { return os.writeInt32(tag, val); }
HQSys.E_AH_SORT_COLUMN._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }

HQSys.ClientInfo = function() {
    this.vGuid = new TafStream.BinBuffer();
    this.sXua = "";
    this._classname = "HQSys.ClientInfo";
};
HQSys.ClientInfo.prototype = new TafStream.JceStruct();
HQSys.ClientInfo._classname = "HQSys.ClientInfo";

HQSys.ClientInfo._write = function (os, tag, value) { os.writeStruct(tag, value); }
HQSys.ClientInfo._read  = function (is, tag, def) { return is.readStruct(tag, true, def); }
HQSys.ClientInfo._readFrom = function (is) {
    if(is.readResumePrecision == undefined){
        is.readResumePrecision = function(){
            return -1;
        }
    }
    is.saveResetPrecision && is.saveResetPrecision();
    var tmp = new HQSys.ClientInfo();
    tmp.vGuid = is.readBytes(0, false, TafStream.BinBuffer);
    tmp.sXua = is.readString(1, false, "");
    tmp._jce_double_precision_ = is.readResumePrecision();
    return tmp;
};
HQSys.ClientInfo.prototype._writeTo = function (os) {
    os.savePrecision && os.savePrecision(this._jce_double_precision_);
    if (this.vGuid != undefined && this.vGuid.length > 0) {
        os.writeBytes(0, this.vGuid);
    }
    if (this.sXua != undefined && this.sXua != "") {
        os.writeString(1, this.sXua);
    }
    os.resumePrecision && os.resumePrecision();
};
HQSys.ClientInfo.prototype._equal = function (anItem) {
    assert(false, 'this structure not define key operation');
}
HQSys.ClientInfo.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = 'STRUCT' + Math.random();
    }
    return this._proto_struct_name_;
}
HQSys.ClientInfo.prototype.toObject = function() { 
    var tmp = {};

    tmp.vGuid = this.vGuid.toObject();
    tmp.sXua = this.sXua;
    
    return tmp;
}
HQSys.ClientInfo.prototype.readFromObject = function(json) { 
    !json.hasOwnProperty("vGuid") || (this.vGuid.readFromObject(json.vGuid));
    !json.hasOwnProperty("sXua") || (this.sXua = json.sXua);
}
HQSys.ClientInfo.prototype.toBinBuffer = function () {
    var os = new TafStream.JceOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
}
HQSys.ClientInfo.new = function () {
    return new HQSys.ClientInfo();
}
HQSys.ClientInfo.create = function (is) {
    return HQSys.ClientInfo._readFrom(is);
}
HQSys.HeaderInfo = function() {
    this.shtMarket = -1;
    this.stClientInfo = new HQSys.ClientInfo();
    this._classname = "HQSys.HeaderInfo";
};
HQSys.HeaderInfo.prototype = new TafStream.JceStruct();
HQSys.HeaderInfo._classname = "HQSys.HeaderInfo";

HQSys.HeaderInfo._write = function (os, tag, value) { os.writeStruct(tag, value); }
HQSys.HeaderInfo._read  = function (is, tag, def) { return is.readStruct(tag, true, def); }
HQSys.HeaderInfo._readFrom = function (is) {
    if(is.readResumePrecision == undefined){
        is.readResumePrecision = function(){
            return -1;
        }
    }
    is.saveResetPrecision && is.saveResetPrecision();
    var tmp = new HQSys.HeaderInfo();
    tmp.shtMarket = is.readInt16(0, false, -1);
    tmp.stClientInfo = is.readStruct(1, false, HQSys.ClientInfo);
    tmp._jce_double_precision_ = is.readResumePrecision();
    return tmp;
};
HQSys.HeaderInfo.prototype._writeTo = function (os) {
    os.savePrecision && os.savePrecision(this._jce_double_precision_);
    if (this.shtMarket != undefined && this.shtMarket != -1) {
        os.writeInt16(0, this.shtMarket);
    }
    os.writeStruct(1, this.stClientInfo);
    os.resumePrecision && os.resumePrecision();
};
HQSys.HeaderInfo.prototype._equal = function (anItem) {
    assert(false, 'this structure not define key operation');
}
HQSys.HeaderInfo.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = 'STRUCT' + Math.random();
    }
    return this._proto_struct_name_;
}
HQSys.HeaderInfo.prototype.toObject = function() { 
    var tmp = {};

    tmp.shtMarket = this.shtMarket;
    tmp.stClientInfo = this.stClientInfo.toObject();
    
    return tmp;
}
HQSys.HeaderInfo.prototype.readFromObject = function(json) { 
    !json.hasOwnProperty("shtMarket") || (this.shtMarket = json.shtMarket);
    !json.hasOwnProperty("stClientInfo") || (this.stClientInfo.readFromObject(json.stClientInfo));
}
HQSys.HeaderInfo.prototype.toBinBuffer = function () {
    var os = new TafStream.JceOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
}
HQSys.HeaderInfo.new = function () {
    return new HQSys.HeaderInfo();
}
HQSys.HeaderInfo.create = function (is) {
    return HQSys.HeaderInfo._readFrom(is);
}


