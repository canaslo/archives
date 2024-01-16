<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="classify accept">
          <h4>外部接收</h4>
          <div class="number">{{ '200' }}</div>
          <div class="stats">
            <div class="total">共接收 <span>{{ '200' }}</span>件</div>
            <div class="current">今日接收 <span>{{ '100' }}件</span></div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="classify accept">
          <h4>整理情况</h4>
          <div class="number">{{ '200' }}</div>
          <div class="stats">
            <div class="box">
              <div class="total">档案类型数量<span>{{ '50' }}</span></div>
              <div class="total">卷内数量<span>{{ '50' }}</span></div>
            </div>
            <div class="box">
              <div class="total">案卷数量<span>{{ '50' }}</span></div>
              <div class="total">一文一件数量<span>{{ '50' }}</span></div>
            </div>

          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="classify accept">
          <h4>利用情况</h4>
          <div class="number">{{ '200' }}</div>
          <div class="stats">
            <div class="total">借阅次数<span>{{ '100' }}</span></div>
            <div class="current">检索次数<span>{{ '100' }}</span></div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="classify accept">
          <h4>保存情况</h4>
          <div class="number">{{ '200' }}</div>
          <div class="stats">
            <div class="total">档案类别 <span>{{ '200' }}</span>(个)</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="classify accept">
          <h4>接收类型统计</h4>
          <div class="echarts"></div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="classify accept">
          <h4>档案检索排名</h4>
          <div class="echarts"></div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="classify accept">
          <h4>档案类型占比</h4>
          <div class="echarts"></div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="classify accept">
          <h4>档案借阅排名</h4>
          <div class="echarts"></div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="classify accept">
          <h4>档案收集情况</h4>
          <div class="echarts"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="classify accept">
          <h4>档案管理情况</h4>
          <div class="echarts"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang='scss'>
.home {
  width: 100%;
  height: 100%;
  @include flex-column-center;
  .el-row {
    width: 100%;
    margin-bottom: 20px;
    &:last-child {
      flex: 1;
      margin-bottom: 0;
      .el-col {
        height: 100%;
        .classify {
          height: 90%;
        }
      }
    }
    .classify {
      height: 25vh;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 4px;
      background-color: #fff;

      h4 {
        font-size: $text-h4;
      }
      .number {
        font-size: $text-h2;
        color: $text-color;
      }
      .stats {
        @include flex-center-between;
      }
    }
  }
}
</style>