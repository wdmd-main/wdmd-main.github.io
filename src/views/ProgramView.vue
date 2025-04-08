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
  { time: '9:10-9:40', speaker: 'TBD', topic: 'Keynote 1' },
  { time: '9:40-10:10', speaker: 'Yuxuan Liang', topic: 'Keynote 2' },
  { time: '10:10-10:30', speaker: '', topic: 'Coffe Break' },
  { time: '10:30-11:00', speaker: 'Ahmed M. A. Sayed', topic: 'Keynote 3' },
  { time: '11:00-11:30', speaker: 'Zheng Yang', topic: 'Keynote 4' },
  { time: '11:30-12:00', speaker: '', topic: `Panel: How LLM Change the Nature of Reliability Engineering` },
  { time: '12:00-14:00', speaker: '', topic: 'Lunch Break' },
  { time: '', speaker: '', topic: 'Phd Session' },
  { time: '14:00-14:15', speaker: 'Yunpu Ma', topic: 'Recent Advances in Agentic AI' },
  { time: '14:15-14:30', speaker: 'Yong Cao', topic: 'Cultural Reliability of LLMs: Can AI Truly Reflect Global Perspectives?' },
  { time: '14:30-14:45', speaker: 'Saibo Geng', topic: 'Generating Structured Outputs with Language Models: Evaluation and Studies' },
  { time: '14:45-15:00', speaker: 'Beiduo Chen', topic: `Understanding and Modeling Human Label Variation in LLM` },
  { time: '15:00-15:15', speaker: 'TBD', topic: 'TBD' },
  { time: '15:15-15:30', speaker: 'TBD', topic: 'TBD' },
  { time: '15:30-15:40', speaker: '', topic: 'Coffe Break' },
  { time: '15:40-15:50', speaker: 'TBD', topic: 'TBD' },
  { time: '15:50-16:00', speaker: 'TBD', topic: 'TBD' },
  { time: '16:00-16:10', speaker: 'TBD', topic: 'TBD' },
  { time: '16:10-16:20', speaker: 'TBD', topic: 'TBD' },
  { time: '16:20-16:30', speaker: 'TBD', topic: 'TBD' },
  { time: '16:30-16:40', speaker: 'TBD', topic: 'TBD' },
  { time: '16:40-16:50', speaker: 'TBD', topic: 'TBD' },
  { time: '16:50-17:00', speaker: 'TBD', topic: 'TBD' },
  { time: '17:00---', speaker: '', topic: 'Ending' },
]

const cellClassName = ({ rowIndex }: MethodProps) => {
  if (rowIndex === 8) {
    return 'title'
  } else if (rowIndex === 3 || rowIndex === 7 || rowIndex === 15 || rowIndex === 24) {
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

  :deep(.rest) {
    background-color: #c0e1ec;
  }
  :deep(.title) {
    background-color: #C2C2C2;
  }
}
</style>