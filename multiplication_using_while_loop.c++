#include<iostream>
using namespace std;
int main()
{
    int num,i=1;
     int mul;
    cout<<"enter the value of num: ";
    cin>>num;
    while(i<=10)
    {
        mul=num*i;
        cout<<num<<"*"<<i<<"="<<mul<<endl;
        i++;
       
    }
    cout<<endl;
    
    return 0;
}