import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

const axisOption = {
  // 图例文字颜色
  textStyle: {
    color: "#333",
  },
  // 提示框
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category", // 类目轴
    data: [],
    axisLine: {
      lineStyle: {
        color: "#17b3a3",
      },
    },
    axisLabel: {
      interval: 0,
      color: "#333",
    },
  },
  yAxis: [
    {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#17b3a3",
        },
      },
    },
  ],
  color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
  series: [],
}

const normalOption = {
  tooltip: {
    trigger: "item",
  },
  color: [
    "#0f78f4",
    "#dd536b",
    "#9462e5",
    "#a6a6a6",
    "#e1bb22",
    "#39c362",
    "#3ed1cf",
  ],
  series: [],
}

//Echarts 的配置数据
const Echarts = ({ style, chartData, isAxisChart = true }) => {
  //获取dom实例，用于初始化Echarts
  const echartRef = useRef()
  //创建一个引用，用于存储Echarts实例
  const echartObj = useRef(null)

  useEffect(() => {
    let options
    // 检查Echarts实例是否已经存在，如果不存在则初始化
    if (!echartObj.current) {
      // 使用dom实例初始化Echarts
      echartObj.current = echarts.init(echartRef.current)
    }
    // 根据是否为坐标轴图表选择不同的配置
    if (isAxisChart) {
      // 设置坐标轴的数据
      axisOption.xAxis.data = chartData.xData
      // 设置系列数据
      axisOption.series = chartData.series
      options = axisOption // 使用坐标轴配置
    } else {
      // 设置系列数据
      normalOption.series = chartData.series
      options = normalOption // 使用普通配置
    }
    // 将配置应用到Echarts实例中
    echartObj.current.setOption(options)
  }, [chartData]) // 当chartData变化时重新渲染图表

  return (
    <div style={style} ref={echartRef}></div>
  )
}

export default Echarts