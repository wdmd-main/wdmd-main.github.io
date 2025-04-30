<template>
  <div class="program">
    <el-table
      :data="tableData"
      border
      style="width: 100%;"
      header-cell-class-name="header"
      :cell-class-name="cellClassName"
    >
      <el-table-column prop="time" label="Time" header-align="center" width="140px" />
      <el-table-column prop="topic" label="Topic" header-align="center" />
      <el-table-column prop="speaker" label="Speaker" header-align="center" width="280px" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus'

interface Data {
  time: string
  topic: string
  speaker: string
}

interface MethodProps {
  row: Data
  column: TableColumnCtx<Data>
  rowIndex: number
  columnIndex: number
}

const tableData: Data[] = [
  { time: '9:00-9:10', speaker: '', topic: 'Opening' },
  { time: '', speaker: '', topic: 'Keynote Session' },
  { time: '9:10-9:40', speaker: 'Enrico Zio', topic: 'Keynote 1: AI for Intelligent Maintenance' },
  { time: '9:40-10:10', speaker: 'Yuxuan Liang', topic: 'Keynote 2: Foundation Models for Spatio-Temporal Data Mining' },
  { time: '10:10-10:30', speaker: '', topic: 'Coffee Break' },
  { time: '10:30-11:00', speaker: 'Ahmed M. A. Sayed', topic: 'Keynote 3: Advancing Decentralized AI: Scalable, Adaptive, and Client-Centric Learning Systems' },
  { time: '11:00-11:30', speaker: 'Zheng Yang', topic: 'Keynote 4' },
  { time: '11:30-12:00', speaker: '', topic: `Panel: How LLM Change the Nature of Reliability Engineering` },
  { time: '12:00-14:00', speaker: '', topic: 'Lunch Break' },
  { time: '', speaker: '', topic: 'Long Presentation Session' },
  { time: '14:00-14:15', speaker: 'Yunpu Ma', topic: 'Recent Advances in Agentic AI' },
  { time: '14:15-14:30', speaker: 'Jiashan Gao', topic: 'Reinforcement learning for multi-agent with asynchronous missing information fusion method' },
  { time: '14:30-14:45', speaker: '', topic: 'Presentation TBD' },
  { time: '14:45-15:00', speaker: '', topic: 'Q&A Slot 1' },
  { time: '15:00-15:15', speaker: 'Yong Cao', topic: 'Cultural Reliability of LLMs: Can AI Truly Reflect Global Perspectives?' },
  { time: '15:15-15:30', speaker: 'Saibo Geng', topic: 'Generating Structured Outputs with Language Models: Evaluation and Studies' },
  { time: '15:30-15:45', speaker: 'Beiduo Chen', topic: `Understanding and Modeling Human Label Variation in LLM` },
  { time: '15:45-16:00', speaker: '', topic: 'Q&A Slot 2' },
  { time: '16:00-16:20', speaker: '', topic: 'Poster & Coffee Break' },
  { time: '', speaker: '', topic: 'Short Presentation Session' },
  { time: '16:20-16:25', speaker: 'Mei Chen', topic: 'Optimal energy-efficient scheduling of flexible manufacturing systems based on Petri net simulation and mathematical programming' },
  { time: '16:25-16:30', speaker: 'Jian Du', topic: 'A knowledge-inspired physics-informed neural network for hydraulic transient simulation of liquid pipelines' },
  { time: '16:30-16:35', speaker: 'Zihang Liu', topic: 'Determination of performance-based design wind speed for long-span bridges using risk-targeted algorithm' },
  { time: '16:35-16:40', speaker: 'Sinan Li', topic: 'Interpretable wavelet packet kernel-constrained convolutional neural network for bearing fault diagnosis' },
  { time: '16:40-16:45', speaker: 'Weijun Xu', topic: 'Towards uncertainty-aware remaining useful life prediction' },
  { time: '16:45-16:50', speaker: 'Wujin Deng', topic: 'Multimodal explainable few-shot learning for trustworthy PHM operations in the smart manufacturing process' },
  { time: '16:50-16:55', speaker: 'Zhiqiang Xu', topic: 'Research on PHM method based on deep learning technology' },
  { time: '16:55-17:00', speaker: 'Zongyao Wang', topic: 'Predictive Maintenance Decision Making for Critical Equipment in Industrial system Based on Remaining Useful Life Estimation' },
  { time: '17:00-17:30', speaker: '', topic: 'Q&A Slot 3' },
  { time: '17:30-18:00', speaker: '', topic: 'Discussion of Challenging Question' },
  { time: '18:00---', speaker: '', topic: 'Ending' },
]

const cellClassName = ({ rowIndex }: MethodProps) => {
  if (rowIndex === 1 || rowIndex === 9 || rowIndex === 19) {
    return 'session'
  } else if (rowIndex === 4 || rowIndex === 8 || rowIndex === 18) {
    return 'rest'
  } else if (rowIndex === 7 || rowIndex === 13 || rowIndex === 17 || rowIndex === 28 || rowIndex === 29) {
    return 'panel'
  }
}
</script>

<style lang="less" scoped>
.program {
  :deep(.header) {
    color: #333;
    > div {
      font-weight: bold;
      font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  }

  :deep(.session) {
    background-color: #c7e1eb;
  }
  :deep(.rest) {
    background-color: #e6e0ae;
  }
  :deep(.panel) {
    background-color: #c4ecb5;
  }
}
</style>