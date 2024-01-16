#include<iostream>
using namespace std;
int main()
{
    int num;
    cout<<"enter the value of num: ";
    cin>>originalnum;
    
    while (originalnum!=0)
    {
        if(originalnum%2==1)
        {
            cout<<0;
        }
         originalnum=originalnum/2;
        
    }
    
    cout<<originalnum<<"is in the power of 2 ";
    return 0;
}