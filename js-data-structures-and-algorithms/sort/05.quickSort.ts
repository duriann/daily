/**
 * 
 * 快速排序也许是最常用的排序算法了。它的复杂度为 O(nlog(n))，且性能通常比其他复杂度 为 O(nlog(n))的排序算法要好。
 * 和归并排序一样，快速排序也使用分而治之的方法，将原始数组 分为较小的数组（但它没有像归并排序那样将它们分割开）。
    快速排序比目前学过的其他排序算法要复杂一些。让我们一步步地来学习。
(1) 首先，从数组中选择一个值作为主元（pivot），也就是数组中间的那个值。
(2) 创建两个指针（引用），左边一个指向数组第一个值，右边一个指向数组最后一个值。
    移 动左指针直到我们找到一个比主元大的值，接着，移动右指针直到找到一个比主元小的值，然后 交换它们，重复这个过程，直到左指针超过了右指针。
    这个过程将使得比主元小的值都排在主元 之前，而比主元大的值都排在主元之后。这一步叫作划分（partition）操作。
(3) 接着，算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的 子数组）重复之前的两个步骤，直至数组已完全排序。
 */
let numbes = [3, 1, 5, 3, 1, 2, 6, 7]
