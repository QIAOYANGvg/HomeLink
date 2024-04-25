export class Point {
    public r: number;
    public x: number;
    public y: number;
    public xSpeed: number;
    public ySpeed: number;
    public lastDrawTime: number | null;

    constructor(
        readonly cvs: HTMLCanvasElement,
        readonly ctx: CanvasRenderingContext2D
    ) {
        this.cvs = cvs;
        this.ctx = ctx;
        this.r = 8;
        this.x = this.getRandomInt(0, cvs.width - this.r / 2);
        this.y = this.getRandomInt(0, cvs.height - this.r / 2);
        this.xSpeed = this.getRandomInt(-50, 50);
        this.ySpeed = this.getRandomInt(-50, 50);
        this.lastDrawTime = null;
    }

    getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    draw() {
        // 更新坐标
        if (this.lastDrawTime) {
            // 计算坐标
            let duration = (Date.now() - this.lastDrawTime) / 1000;
            if (duration > 0.2) {
                duration = 0.2;
            }

            let xDis = this.xSpeed * duration;
            let yDis = this.ySpeed * duration;

            let x = this.x + xDis;
            let y = this.y + yDis;

            // 边缘碰撞检测
            if (x > this.cvs.width - this.r / 2) {
                x = this.cvs.width - this.r / 2;
                this.xSpeed = -this.xSpeed;
            } else if (x < 0) {
                x = 0;
                this.xSpeed = -this.xSpeed;
            }

            if (y > this.cvs.height - this.r / 2) {
                y = this.cvs.height - this.r / 2;
                this.ySpeed = -this.ySpeed;
            } else if (y < 0) {
                y = 0;
                this.ySpeed = -this.ySpeed;
            }

            this.x = x;
            this.y = y;
        }

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#5bb9db';
        this.ctx.fill();
        this.lastDrawTime = Date.now();
    }
}

interface client {
    x: number | null;
    y: number | null;
}
export class Graph {
    public point: Point[];
    public maxDis: number;
    public currentPoint: client = { x: null, y: null };
    public drawLineMaxDis: number;
    public maxSpeedLimit = 100;

    constructor(
        readonly cvs: HTMLCanvasElement,
        readonly ctx: CanvasRenderingContext2D,
        pointNumber: number = 50,
        maxDis: number = 300
    ) {
        this.point = [];
        for (let i = 0; i < pointNumber; i++) {
            this.point.push(new Point(cvs, ctx));
        }
        this.maxDis = maxDis;
        this.drawLineMaxDis = maxDis ** 2;
    }

    draw() {
        requestAnimationFrame(() => {
            this.draw();
        });
        // 清空画布
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);

        for (let i = 0; i < this.point.length; i++) {
            const p1 = this.point[i];
            // 绘制点
            p1.draw();

            // 判断点前点距离鼠标的位置是否满足生成连线的条件
            if (this.currentPoint.x !== null && this.currentPoint.y !== null) {
                const dSquared = (p1.x - this.currentPoint.x) ** 2 + (p1.y - this.currentPoint.y) ** 2;

                if (dSquared < this.maxDis ** 2) {
                    const xDist = this.currentPoint.x - p1.x;
                    const yDist = this.currentPoint.y - p1.y;

                    if (dSquared <= 500) {
                        p1.x -= 0.02 * xDist;
                        p1.y -= 0.02 * yDist;
                        p1.xSpeed = -p1.xSpeed;
                        p1.ySpeed = -p1.ySpeed;
                    }
                    p1.xSpeed += 0.02 * xDist;
                    p1.ySpeed += 0.02 * yDist;

                    // 限制小球最大速度
                    p1.xSpeed = Math.max(Math.min(p1.xSpeed, this.maxSpeedLimit), -this.maxSpeedLimit);
                    p1.ySpeed = Math.max(Math.min(p1.ySpeed, this.maxSpeedLimit), -this.maxSpeedLimit);

                    this.drawLine(
                        p1,
                        { x: this.currentPoint.x, y: this.currentPoint.y },
                        1 - Math.sqrt(dSquared) / this.maxDis
                    );
                }
            }

            for (let j = i + 1; j < this.point.length; j++) {
                const p2 = this.point[j];

                // 获取两个点的距离的平方
                const distanceSquared = (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;

                // 大于最大距离的平方 则不绘制线条
                if (distanceSquared > this.maxDis ** 2) {
                    continue;
                }
                this.drawLine(p1, p2, 1 - Math.sqrt(distanceSquared) / this.maxDis);
            }
        }
    }

    updateMousePosition(event: MouseEvent): void {
        if (event) {
            this.currentPoint.x = event.x * devicePixelRatio;
            this.currentPoint.y = event.y * devicePixelRatio;
        }
    }

    clearMousePosition(): void {
        this.currentPoint.x = null;
        this.currentPoint.y = null;
    }

    drawLine(p1: Point | client, p2: Point | client, transparency: number): void {
        this.ctx.beginPath();
        this.ctx.moveTo(<number>p1.x, <number>p1.y);
        this.ctx.lineTo(<number>p2.x, <number>p2.y);
        this.ctx.strokeStyle = `rgba(255,255,255,${transparency})`;
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
    }
}
