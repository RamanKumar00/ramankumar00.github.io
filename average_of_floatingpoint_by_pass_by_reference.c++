#include<iostream>
using namespace std;
void calculateAverage(const double arr[], int size, double &average) {
    double sum = 0;
    for (int i = 0; i < size; ++i) {
        sum += arr[i];
    }
    average = sum / size;
}

int main() {
    double values[] = {3.5, 2.0, 6.8, 4.2, 5.1};
    int size = sizeof(values) / sizeof(values[0]);
    double avg;

    calculateAverage(values, size, avg);

    cout << "Average: " << avg << endl;

    return 0;
}
