#include<iostream>
using namespace std;
int main()
{
    int size;
    cout<<"enter size of an aaray: ";
    cin>>size;
    int arr[size];
    cin>>arr[size];
    cout<<"enter"<< size <<"element of array: ";
    for(int i=0;i<size;i++)
    {
        cin>>arr[i];
    }
    int mul=1;
    for(int i=0;i<size;i++)
    {
        mul=mul*arr[i];
    }
    cout<<mul;
    return 0;


}