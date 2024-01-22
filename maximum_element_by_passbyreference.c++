#include<iostream>
using namespace std;
void findMaxElement(const int arr[], int size, int &maxElement) {
    maxElement = arr[0];
    for (int i = 1; i < size; ++i) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
}

int main() {
    int numbers[] = {12, 5, 8, 20, 15};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    int maxVal;

    findMaxElement(numbers, size, maxVal);

    cout << "Maximum Element: " << maxVal << endl;

    return 0;
}
