#include<iostream>
using namespace std;

int main() {
    
    double salary, bonus;
    int yearsOfService;

   
    cout << "Enter your salary: ";
    cin >> salary;

    
    cout << "Enter your years of service: ";
    cin >> yearsOfService;

    
    if (yearsOfService > 5) {
        bonus = 0.05 * salary;
        cout << "Congratulations! You qualify for a bonus." << endl;
        cout << "Net Bonus Amount: $" << bonus << endl;
    } else {
        cout << "Sorry, you do not qualify for a bonus." << endl;
    }

    return 0;
}
