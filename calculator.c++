#include<iostream>
using namespace std;
int main()
{
    int n1,n2;
    cout<<"enter the value of  n1:  n2: ";
    cin>>n1>>n2;

    cout<<"choose an operator(+,-,*,/,%):";
    char op;
    cin>>op;

    switch(op){

        case '+':
        cout<<"sum is: "<<n1+n2<<endl;
        break;

        case '-':
        cout<<"diffrence is: "<<n1-n2<<endl;
        break;

        case '*':
        cout<<"multiplication is: "<<n1*n2<<endl;
        break;

        case '/':
        cout<<"division is: "<<n1/n2<<endl;
        break;

        case '%':
        cout<<"remainder is: "<<n1%n2<<endl;
        break;

        default:
        cout<<"you have choosen invalid operators"<<endl;
        break;
    }
}