#include<iostream>
using namespace std;

int calculateHCF(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int calculateLCM(int num1, int num2) {
    int hcf = calculateHCF(num1, num2);
    int lcm = (num1 * num2) / hcf;
    return lcm;
}

int main() {
    int num1, num2;

    
    cout << "Enter the first number: ";
    cin >> num1;

    cout << "Enter the second number: ";
    cin >> num2;

    
    int lcm = calculateLCM(num1, num2);
    cout << "LCM of " << num1 << " and " << num2 << " is: " << lcm << endl;

    return 0;
}
