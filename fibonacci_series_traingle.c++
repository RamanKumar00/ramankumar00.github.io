#include<iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter the number of rows for the Fibonacci series triangle: ";
    cin >> n;

    int a = 0, b = 1, c;

    for (int i = 1; i <= n; ++i) {
        a = 0;
        b = 1;
        cout << "Fibonacci sequence in row " << i << ": ";

        for (int j = 1; j <= i; ++j) {
            cout << a << " ";
            c = a + b;
            a = b;
            b = c;
        }

        cout << endl;
    }

    return 0;
}
