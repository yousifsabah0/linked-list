/**
 * Definition
 * A linked list is a linear data structure that represents a collection of elements,
 * where each element points to the next one. The first element in the linked list is the head and the last element is the tail.
 *
 * Each element of a linked list data structure must have the following properties:
 *  * value: The value of the element
 *  * next: A pointer to the next element in the linked list (null if there is none)
 *
 * The main properties of a linked list data structure are:
 *  * size: The number of elements in the linked list
 *  * head: The first element in the linked list
 *  * tail: The last element in the linked list
 *
 *  The main operations of a linked list data structure are:
 *
 *  * insertAt: Inserts an element at the specific index
 *  * removeAt: Removes the element at the specific index
 *  * getAt: Retrieves the element at the specific index
 *  * clear: Empties the linked list
 *  * reverse: Reverses the order of elements in the linked list
 *
 */

class LinkedList {
  constructor() {
    this.nodes = [];
  }

  /**
   * @description returns the number of elements inside nodes array.
   *
   * @returns {Number}
   *
   */
  get size() {
    return this.nodes.length;
  }

  /**
   * @description returns the the first element of the nodes array.
   *
   * @returns {}
   *
   */
  get head() {
    return this.size ? this.nodes[0] : null;
  }

  /**
   * @description returns the the last element of the nodes array.
   *
   * @returns {}
   *
   */
  get head() {
    return this.size ? this.nodes[this.size - 1] : null;
  }

  /**
   * @description adds a new object inside nodes array.
   *
   * @param {Number} index
   * @param {Object} value
   *
   */
  insertAt(index, value) {
    const previous = this.nodes[index - 1] || null;
    const next = this.nodes[index] || null;
    const node = { value, next };

    if (previous) {
      previous.next = node;
    }

    this.nodes.splice(index, 0, node);
  }

  /**
   * @description adds a new object to the start of the nodes array.
   *
   * @param {Object} value
   *
   */
  insertFirst(value) {
    this.insertAt(0, value);
  }

  /**
   * @description adds a new object to the end of the nodes array.
   *
   * @param {Object} value
   *
   */
  insertFirst(value) {
    this.insertAt(this.size, value);
  }

  /**
   * @description returns the element in given array
   *
   * @param {Number} index
   *
   */
  getAt(value) {
    this.nodes[index];
  }

  /**
   * @description removes all elements from nodes array
   *
   */
  clear() {
    this.nodes = [];
  }

  /**
   * @description remove the element at given index
   *
   */
  clear(index) {
    const previous = this.node[this.size - 1];
    const next = this.nodes[this.size + 1] || null;

    if (previous) {
      previous.next = next;
    }

    return this.nodes.splice(index, 1);
  }

  /**
   * @description reverse the nodes array
   *
   */
  reverse() {
    this.nodes = this.nodes.reduce(
      (acc, { value }) => [{ value, next: acc[0] || null }, ...acc],
      []
    );
  }

  *[Symbol.iterator]() {
    yield* this.nodes;
  }
}
