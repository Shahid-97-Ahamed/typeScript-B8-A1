# Access Modifiers in TypeScript: Controlling Who Can Touch Your Data
 
## Introduction
 
In object-oriented code, some properties shouldn't be open to the whole program. A salary, for example, shouldn't be editable from anywhere. TypeScript has four modifiers for this: `public`, `private`, `protected` and `readonly`. Each one controls who can read or change a class member.
 
## `public`
 
Every class member is `public` by default, so code anywhere can use it. A method like `getDetails()` below is public, which means you rarely have to write the keyword.
 
## `private` and `protected`
 
Here's an `Employee` class from one of my practice exercises:
 
```typescript
class Employee {
    constructor(protected name: string, private baseSalary: number) { }
 
    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}
```
 
These are parameter properties. Putting a modifier on a constructor parameter declares the field and assigns it in one line. You can see the difference between the two modifiers in a subclass:
 
```typescript
class Manager extends Employee {
    constructor(name: string, baseSalary: number, private department: string) {
        super(name, baseSalary)
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}` // OK, name is protected
        // this.baseSalary would be an error, because it is private to Employee
    }
}
 
const manager = new Manager("Rafi", 50000, "Sales")
manager.getRoleInfo()   // OK, public method
// manager.name         // Error: protected
// manager.baseSalary   // Error: private
```
 
`protected` members are visible inside the class and in its subclasses. `private` members are visible only inside the class that declares them, so even a child class can't reach them.
 
## `readonly`
 
`readonly` lets code read a value but not reassign it. It works on class properties, and it also works on arrays and tuples:
 
```typescript
const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
    const [latitude, longitude, locationName] = coordinate
    // coordinate[0] = 0   // Error: cannot assign to a readonly tuple
    return `Location: ${locationName} (${latitude}, ${longitude})`
}
```
 
One thing to keep in mind is that these modifiers are only checked at compile time. In the compiled JavaScript, `private` fields are ordinary properties. If you need privacy that holds at runtime, use JavaScript's `#field` syntax.
 
## Conclusion
 
Access modifiers make the intent of a class clear. `public` is the open API, `protected` is shared with subclasses, `private` stays inside one class, and `readonly` stops a value from being changed. Used together, they let the compiler enforce your design for you.