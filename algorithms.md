# Algorithms

## Divide and Conquer

The Divide and Conquer algorithm is a problem-solving paradigm that breaks a complex problem into smaller sub-problems, solves them independently, and combines their results to find the final solution.

## Two pointer

The Two Pointer Technique is a highly efficient algorithmic pattern used to iterate through data structures (like arrays, strings, or linked lists) using two references or indices. It eliminates the need for nested loops, often optimizing time complexity from \(O(n^2)\) down to \(O(n)\).

### 1. Opposite Ends (The "Squeeze" Approach)

#### How it works:

One pointer starts at the beginning of the data structure (index 0), and the other starts at the end. They move inward toward the center until they meet or cross each other.

#### Best used for:

Sorted arrays or data structures that can be easily sorted.Common Use Cases:Target Sums: Finding a pair of numbers in a sorted array that sum up to a specific target.
Palindrome Check: Determining if a string is a palindrome by comparing characters from the outside in.Container With Most Water: Finding the maximum area by moving the pointer that represents the shorter vertical line inward

### 2. Same Direction (The "Slow and Fast" Approach)

#### How it works:

Both pointers start at the same end of the data structure, but they move in the same direction at different speeds (e.g., one steps forward by 1, while the other steps forward by 2 or more).

#### Best used for: Linked lists or scenarios where you need to extract specific elements in a single pass.

#### Common Use Cases:

#### Cycle Detection:

Finding if a linked list has a circular loop (Floyd's Cycle-Finding Algorithm).Middle of a Linked List: Finding the exact middle node in a single pass (the fast pointer reaches the end when the slow pointer is at the middle).

#### Removing Duplicates:

Shifting unique elements to the front of an array while a fast pointer scans the whole list

