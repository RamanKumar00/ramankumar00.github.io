#include<iostream>
using namespace std;
int main()
{
    int size;
    cout<<"enter the size of array: ";
    cin>>size;
    int arr[size];
     
     cout<<"enter"<< size <<"element of aaray: ";
     for(int i=0;i<size;i++)
     {
        cin>>arr[i];
    
     }
    int maxelement=arr[0];
    for(int i=1;i<size;i++)
     {
        if(maxelement<arr[i])
        {
            maxelement=arr[i];
        }
     }
     cout<<"the max element of array is: "<<maxelement<<endl;

    int minelement=arr[0];
    for(int i=1;i<size;i++)
     {
        if(minelement>arr[i])
        {
            minelement=arr[i];
        }
     }
     cout<<"the min element of array is: "<<minelement<<endl;
     return 0;



}