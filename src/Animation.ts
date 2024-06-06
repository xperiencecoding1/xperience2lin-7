// Custom animations class built on top of framer-motion's variants framework.
// Uses builder pattern for quick instantiation into objects to maximize reusage.
export class Anim {

    inactive: any
    active: any

    constructor(i: any = {}, a: any = {}) {
        this.inactive = i;
        this.active = a;
        this.active["transition"] = {};
    }

    spring(stiffness: number, delay: number = 0, damping: number = 10, mass: number = 1) {
        this.active["transition"]["stiffness"] = stiffness;
        this.active["transition"]["type"] = "spring";
        this.active["transition"]["damping"] = damping;
        this.active["transition"]["mass"] = mass;
        this.active["transition"]["delay"] = delay;
        return this;
    }

    // delay children
    delay_children(dur: number = 0.5) {
        this.active["transition"]["delayChildren"] = dur;
        return this;
    }

    // stagger children
    stagger(amt = 0.05, reverse = false) {
        this.active["transition"]["staggerChildren"] = amt;
        this.active["transition"]["staggerDirection"] = reverse ? -1 : 1;
        return this;
    }

    when(afterInstead = false) {
        if (!afterInstead) this.active["transition"]["when"] = "beforeChildren"
        else this.active["transition"]["when"] = "afterChildren"
        return this
    }
    loop(type: "loop" | "reverse" | "mirror" = "mirror", times: number | "Infinity" = "Infinity", delay: number = 0) {
        this.active["transition"]["repeatType"] = type
        this.active["transition"]["repeat"] = times
        this.active["transition"]["repeatDelay"] = delay
        return this
    }

    add(prop: string, inactive: string, active: string) {
        this.inactive[prop] = inactive
        this.active[prop] = active
        return this;
    }

    default() {
        this.spring(100);
        this.delay_children();
        return this;
    }

    // clear transitions if child in staggered animation
    // transition inherited from parent
    build(transitions = true, reverse = false) {
        if (transitions && reverse) this.inactive["transition"] = this.active["transition"]
        else if (!transitions) {
            delete this.inactive["transition"]
            delete this.active["transition"]
        }
        let r = {
            inactive: this.inactive,
            active: this.active,
        }
        return r
    }

    static getSpring(stiffness = 120, delay = 0, damping = 20, mass = 1) {
        return {
            type: "spring",
            stiffness: stiffness,
            delay: delay,
            damping: damping,
            mass: mass,
        }
    }

    static opacity(duration: number): Anim {
        return new Anim({
            opacity: 0,
        },{
            opacity: 1,
        });
    }

    static point(coords: [number, number]) {
        return new Anim({
            x: coords[0] + "px",
            y: coords[1] + "px",
            opacity: 0,
        },{
            x: 0,
            y: 0,
            opacity: 1,
        });
    }

    static flipX() {
        return new Anim({
            transform: "rotateX(180deg)"
        },{
            transform: "rotateX(0deg)",
        });
    }

    static flipY() {
        return new Anim({
            transform: "rotateY(180deg)"
        },{
            transform: "rotateY(0deg)",
        });
    }

    static bounceY(y: number) {
        return new Anim({
            y: y + "px",
            opacity: 0,
        },{
            y: "0px",
            opacity: 1,
        });
    }

    static bounceX(x: number) {
        return new Anim({
            x: x + "px",
            opacity: 0,
        },{
            x: "0px",
            opacity: 1,
        });
    }

    static scale(x: [number, number] = [0, 1], y: [number, number] = [0, 1]) {
        return new Anim({
            transform: `scale(${x[0]}, ${y[0]})`,
            opacity: 0,
        },{
            transform: `scale(${x[1]}, ${y[1]})`,
            opacity: 1,
        })
    }
}

export function hexToRgb(hex: string) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) ?? "";
    return parseInt(result[1], 16) + "," +
        parseInt(result[2], 16) + "," +
        parseInt(result[3], 16) + ","
}

export function range(from: number, to: number, step: number) {
    return [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);
}
