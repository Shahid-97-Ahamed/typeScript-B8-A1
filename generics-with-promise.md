# Understanding Generics in TypeScript and How They Make `Promise<T>` Safer
 
## Introduction
 
When I started writing TypeScript, I kept hitting the same problem. I wanted one function that worked with many types, but I didn't want to lose type safety by using `any`. Generics fixed that. A generic is a placeholder type, usually written as `T`, and TypeScript fills it in when the function is called.
 
## How a Generic Function Works
 
Here's a helper I wrote that merges any number of arrays:
 
```typescript
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const combined: T[] = []
    for (const array of arrays) {
        for (const item of array) {
            combined.push(item)
        }
    }
    return combined
}
 
concatenateArrays([1, 2], [3, 4])    // number[]
concatenateArrays(["a"], ["b", "c"]) // string[]
```
 
TypeScript works out `T` from the arguments. If you pass number arrays, you get back `number[]`. If you pass string arrays, you get `string[]`. So one function covers every case, and nothing falls back to `any`.
 
## Constraining Generics with `keyof`
 
Constraints make generics even more useful. In `pluckValues`, `K extends keyof T` means the key has to exist on the object:
 
```typescript
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map(item => item[key])
}
 
const titles = pluckValues(courses, "title")   // string[]
// pluckValues(courses, "price")               // Error: not a key of Course
```
 
The return type `T[K][]` is exact too. Plucking `title` from a `Course[]` gives `string[]`, and plucking `students` gives `number[]`.
 
## Generics and `Promise<T>`
 
`Promise` is a generic type itself. Writing `Promise<string>` tells TypeScript what the promise will resolve to:
 
```typescript
const validateAgeAsync = async (age: number): Promise<string> => {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older")
    }
    await new Promise((resolve) => { setTimeout(resolve, 1000) })
    return "Access Granted"
}
 
const result = await validateAgeAsync(21) // result: string
```
 
After the `await`, TypeScript knows `result` is a string. Your editor suggests string methods, and type mistakes show up before the code runs. This helps even more with API calls. A wrapper like `fetchData<T>()` lets each caller describe the shape of the response it expects.
 
## Conclusion
 
Generics let you write reusable code and keep type safety. Merging arrays, picking object properties and handling async results all work the same way: `T` tells the compiler exactly what data is moving through your code.
 
Claude finished the response
