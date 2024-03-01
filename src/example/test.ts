class ProducerConsumer {
  private tasks: Array<string> = []
  private running = 0
  private max: number
  constructor(max = 1) {
    this.max = max
  }

  produce(task: string) {
    this.tasks.push(task)
    if (this.running < 10) {
      this.processTasks()
    }
  }

  async consume(task: string) {
    console.log('开始处理任务:', task)
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log('任务完成:', task)
        resolve(null)
      }, 10)
    })
  }

  async processTasks() {
    while (this.tasks.length > 0 && this.running < this.max) {
      const task = this.tasks.shift()!
      this.running++
      this.consume(task)
        .then(() => {
          this.running--
          this.processTasks() // 再次检查任务队列
        })
        .catch((error) => {
          console.error('出错了', error)
        })
    }
  }
}

const pc = new ProducerConsumer(3)

pc.produce('任务1')
pc.produce('任务2')
pc.produce('任务3')
pc.produce('任务4')
pc.produce('任务5')
pc.produce('任务6')
pc.produce('任务7')
pc.produce('任务8')
pc.produce('任务9')
pc.produce('任务10')
