<template>
  <div class="program">
    TBD
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
  { time: '9:20-9:30', speaker: 'Joseph Sifakis', topic: 'Opening: Risk Assessment of AI Systems' },
  { time: '', speaker: '', topic: 'Session One--Invited Talks: Reliability and Functional Safty for Autonomous Driving Systems' },
  { time: '9:30-10:10', speaker: 'Yuxiang Sun', topic: 'Keynote 1: AI-powered Safe and Reliable Autonomous Navigation for Self-Driving Vehicles' },
  { time: '10:10-10:50', speaker: 'Yanlei Gu', topic: 'Keynote 2: Autonomous Driving in the Urban City Environment' },
  { time: '10:50-11:05', speaker: '', topic: 'Coffe Break' },
  { time: '', speaker: '', topic: `Session Two --- Paper session: Reliability Modelling and It's Application` },
  { time: '11:05-11:15', speaker: 'Feng Liu, Zifan Zeng, Chongzhe Zhang, Joseph Sifakis, Qunli Zhang, Shiming Liu and Peng Wang.', topic: 'World Models: The Safety Perspective' },
  { time: '11:15-11:25', speaker: 'Irfan Sljivo, Pavlo Vlastos, Corey Carter and Aaron Woodard.', topic: 'Developing a Dependable Multi-Agent Rover Swarm Using cFS' },
  { time: '11:25-11:35', speaker: 'Chuqi Guo, Yu Lin, Ling Dong, Zhijie Feng, Luyao Ye, Wenhua Hu, Siwei Zhou and Jianwen Xiang', topic: 'Reliability Analysis of Man-Machine Systems Considering Imperfect Error Coverage Model' },
  { time: '11:35 -11:45', speaker: 'Lizhi Zhang, Jingwei Fu, Yan He and Xiaobin Jiang.', topic: 'Toward Deterministic Wireless Communication: Latency Prediction Using Network Measurement Data' },
  { time: '11:45-11:55', speaker: 'Ning Lu, Qian Xie, Hao Zhang, Wenyi Fang, Yang Zheng, Zheng Hu and Jiantao Ma', topic: 'A Practical Reliability Metric for Large Language Model Training Systems' },
  { time: '', speaker: '', topic: `Session Three --- Invited Talks: Reliablity and Modelling Technogies for AI Systems ` },
  { time: '13:40-14:20', speaker: 'Guanpeng Li', topic: 'Keynote 3: Towards building fault-tolerant and compression-accelerated HPC systems' },
  { time: '14:20-15:00', speaker: 'Mohamed Wahib', topic: 'Keynote 4: Parallelism in LLMs: Beyond Data, Tensor, and Pipeline Parallelism' },
  { time: '15:00-15:15', speaker: '', topic: 'Coffe Break' },
  { time: '15:15-15:55', speaker: 'Xing Pan', topic: 'Keynote 5: Reliability Analysis and Evaluation of Computing Network' },
  { time: '15:55-16:40', speaker: '', topic: 'Panel: Reliability Technologies for AI training/Inference Systems (Panel: Chair Zheng zhen)' },
  { time: '16:40---', speaker: '', topic: 'Ending' },
]

const cellClassName = ({ rowIndex }: MethodProps) => {
  if (rowIndex === 1 || rowIndex === 5 || rowIndex === 11) {
    return 'title'
  } else if (rowIndex === 4 || rowIndex === 14) {
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