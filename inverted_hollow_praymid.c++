#include <iostream>
using namespace std;
int main()
{
    int n;
    int m;
    cout << "Enter the number of rows" << endl;
    cin >> n;
    cout << "Hollow Inverted Pyramid pattern is\n";
    m = 1;
    for(int i=n; i>=1; i--) {
        for(int j=1; j<m; j++) {
            cout << " ";
        }
        for(int k=1; k<=2*i-1; k++) {
            if(k==1 || k==2*i-1 || i==n)
                cout << "*";
            else
                cout << " ";
        }
        m++;
        cout << endl;
    }
    return 0;
}