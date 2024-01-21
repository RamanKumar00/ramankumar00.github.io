#include<iostream>
#include<unordered_set>
using namespace std;

int findDuplicate(int arr[], int size) {
    unordered_set<int> seen;

    for (int i = 0; i < size; ++i) {
        if (seen.find(arr[i]) != seen.end()) {
            return arr[i];
        }
        seen.insert(arr[i]);
    }

    return -1; // No duplicate element
}

int main() {
    int arr[] = {3, 1, 3, 4, 2};
    int size = sizeof(arr) / sizeof(arr[0]);

    int result = findDuplicate(arr, size);

    if (result != -1) {
        cout << "Duplicate Element: " << result << endl;
    } else {
        cout << "No Duplicate Element" << endl;
    }

    return 0;
}
