#include<iostream>
using namespace std;


int calculateSeriesSum(int n) {
    int sum = 0;
    int term = 0;

    for (int i = 1; i <= n; ++i) {
        term += i;
        sum += term;
    }

    return sum;
}

int main() {
    int n;

    cout << "Enter the value of n: ";
    cin >> n;

    
    int seriesSum = calculateSeriesSum(n);
    cout << "Series sum up to " << n << " terms is: " << seriesSum << endl;

    return 0;
}
