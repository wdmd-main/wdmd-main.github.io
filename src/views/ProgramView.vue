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
  { time: '', speaker: '', topic: 'Keynote Session 1' },
  { time: '9:00-9:30', speaker: 'Enrico Zio', topic: 'Keynote 1: AI for Intelligent Maintenance' },
  { time: '9:30-10:00', speaker: 'Yuxuan Liang', topic: 'Keynote 2: Foundation Models for Spatio-Temporal Data Mining' },
  { time: '10:00-10:30', speaker: 'Ahmed M. A. Sayed', topic: 'Keynote 3: Advancing Decentralized AI: Scalable, Adaptive, and Client-Centric Learning Systems' },
  { time: '10:30-11:00', speaker: '', topic: 'Coffee Break' },
  { time: '', speaker: '', topic: 'Keynote Session 2' },
  { time: '11:00-11:30', speaker: 'Zheng Yang', topic: 'Keynote 4' },
  { time: '11:30-11:45', speaker: 'Shengkun Cui', topic: 'Paper: Characterizing Modern GPU Resilience and Impact in HPC Systems: A Case Study of A100 GPUs' },
  { time: '11:45-12:30', speaker: '', topic: `Panel: How LLM Change the Nature of Reliability Engineering` },
  { time: '12:30-14:00', speaker: '', topic: 'Lunch Break' },
  { time: '', speaker: '', topic: 'Long Presentation Session' },
  { time: '14:00-14:15', speaker: 'Yunpu Ma', topic: 'Recent Advances in Agentic AI' },
  { time: '14:15-14:30', speaker: 'Jiashan Gao', topic: 'Reinforcement learning for multi-agent with asynchronous missing information fusion method' },
  { time: '14:30-14:45', speaker: 'Yong Cao', topic: 'Cultural Reliability of LLMs: Can AI Truly Reflect Global Perspectives?' },
  { time: '14:45-15:00', speaker: 'Saibo Geng', topic: 'Generating Structured Outputs with Language Models: Evaluation and Studies' },
  { time: '15:00-15:15', speaker: 'Beiduo Chen', topic: `Understanding and Modeling Human Label Variation in LLM` },
  { time: '15:15-15:30', speaker: '', topic: 'Q&A Slot' },
  { time: '15:30-16:00', speaker: '', topic: 'Coffee Break & Poster' },
  { time: '', speaker: '', topic: 'Short Presentation Session' },
  { time: '16:00-16:05', speaker: 'Mei Chen', topic: 'Optimal energy-efficient scheduling of flexible manufacturing systems based on Petri net simulation and mathematical programming' },
  { time: '16:05-16:10', speaker: 'Jian Du', topic: 'A knowledge-inspired physics-informed neural network for hydraulic transient simulation of liquid pipelines' },
  { time: '16:10-16:15', speaker: 'Zihang Liu', topic: 'Determination of performance-based design wind speed for long-span bridges using risk-targeted algorithm' },
  { time: '16:15-16:20', speaker: 'Sinan Li', topic: 'Interpretable wavelet packet kernel-constrained convolutional neural network for bearing fault diagnosis' },
  { time: '16:20-16:25', speaker: 'Weijun Xu', topic: 'Towards uncertainty-aware remaining useful life prediction' },
  { time: '16:25-16:30', speaker: 'Wujin Deng', topic: 'Multimodal explainable few-shot learning for trustworthy PHM operations in the smart manufacturing process' },
  { time: '16:30-16:35', speaker: 'Zhiqiang Xu', topic: 'Research on PHM method based on deep learning technology' },
  { time: '16:35-16:40', speaker: 'Zongyao Wang', topic: 'Predictive Maintenance Decision Making for Critical Equipment in Industrial system Based on Remaining Useful Life Estimation' },
  { time: '16:40-17:00', speaker: '', topic: 'Q&A Slot' },
  { time: '17:00-17:30', speaker: '', topic: 'Discussion of Challenging Questions' },
  { time: '17:30---', speaker: '', topic: 'Ending' },
]

const cellClassName = ({ rowIndex }: MethodProps) => {
  if (rowIndex === 0 || rowIndex === 5 || rowIndex === 10 || rowIndex === 18) {
    return 'session'
  } else if (rowIndex === 4 || rowIndex === 9 || rowIndex === 17 || rowIndex === 29) {
    return 'rest'
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
}
</style>