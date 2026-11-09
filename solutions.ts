const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier === undefined) {
        return value * 2;
    } else {
        return value * multiplier;
    }
}



const processInput = (value: (string | number | boolean)): (string | number) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase()
    } else if (typeof value === "number") {
        return value * 10

    } else {
        return value ? "Active" : "Inactive";
    }
}


const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
    const [latitude, longitude, locationName] = coordinate
    return `Location: ${locationName} (${latitude}, ${longitude})`
}





const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const combined: T[] = []

    for (const array of arrays) {
        for (const item of array) {
            combined.push(item)
        }
    }
    return combined
}





interface Course {
    title: string,
    students: number,
    isPublished: boolean
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter(course => course.students >= minStudents && course.isPublished)
}






const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map(item => item[key])
}




class Employee {
    constructor(protected name: string, private baseSalary: number) { }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {

    constructor(name: string, baseSalary: number, private department: string) {
        super(name, baseSalary)
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`
    }
}






const validateAgeAsync = async (age: number): Promise<string> => {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older")
    }
    await new Promise((resolve) => { setTimeout(resolve, 1000) })
    return "Access Granted"
}


