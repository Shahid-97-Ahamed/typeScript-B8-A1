const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier === undefined) {
        return value * 2;
    } else {
        return value * multiplier;
    }

}

multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);


const processInput = (value: (string | number | boolean)) => {
    if (typeof value === "string") {
        return value.trim().toLocaleLowerCase()
    } else if (typeof value === "number") {
        return value * 10
    } else {
        return value ? "Active" : "Inactive"
    }
}

// Sample Input:
processInput("  TypeScript  ");
processInput(7);
processInput(true);
processInput(false);


const formatCoordinate = (coordinate :readonly [number,number,string]): string => {
    const [latitude,longitude,locationName] = coordinate
    return `Location: ${locationName} (${latitude}, ${longitude})`

}

formatCoordinate([23.81, 90.41, "Dhaka"]);
formatCoordinate([22.35, 91.78, "Chittagong"]);


const concatenateArrays = <T> (...arrays:T[][]):T[] =>{
    
    return arrays.flat()
    
}

// Sample Input:
concatenateArrays(["a", "b"], ["c", "d"]);
concatenateArrays([1, 2], [3, 4], [5]);


interface Course {
    title : string,
    students : number,
    isPublished :boolean
}

const getPopularCourses = (courses:Course[],minStudents :number) =>{
    return courses.filter(course => course.students >= 45 && course.isPublished === true)
}

// Sample Input:
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

getPopularCourses(courses, 80);


const pluckValues = <T,K extends keyof T> (items:T[],key :K):T[K][] =>{
  return  items.map(itam => itam[key])
} 

// Sample Input:
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

pluckValues(users, "name");
pluckValues(users, "id");

// // Sample Output:
// ["Rakib", "Sadia", "Tariq"]
// [1, 2, 3]

