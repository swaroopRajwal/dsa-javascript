import { describe, expect, it } from "vitest";
import List, { Node } from "../lib/linkedlist";


describe("Linked List Tests",() => {
  let value = 20
  const list = new List(value)

  it("should have value and next be null", () => {
    const node = new Node(value);
    expect(node.next).toBe(null);
    expect(node.value).toBe(value);
  })

  it("sould make a new node", () => {
    let valueTwo = 30;
    const listTwo = new List(valueTwo);

    expect(listTwo.head.value).toBe(valueTwo);
    expect(listTwo.tail.value).toBe(valueTwo);
    expect(listTwo.length).toBe(1);
  })

  it("should add an element", () => {
    const valueTwo = 40;
    list.push(valueTwo);

    const newList = new List();
    newList.push(valueTwo);

    expect(list.length).toBe(2)

    expect(newList.head.value).toBe(valueTwo);
    expect(newList.head).toBe(newList.tail);
    expect(newList.head.value).toBe(valueTwo);
  })

  it("should remove the last node", () => {
    const valueTwo = 90;
    const newList = new List();
    const secondNewList = new List(valueTwo);

    list.push(valueTwo);


    expect(newList.pop()).toBe(false);
    expect(secondNewList.pop().value).toBe(valueTwo)
    expect(list.pop().value).toBe(valueTwo);
  });
})
