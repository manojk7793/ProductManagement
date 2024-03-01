<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      // Retrieve all products
      $products = Product::all();
      return response()->json($products);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $product = Product::create($request->post());
        return response()->json([
            'message'=>'Product Created Successfully!!',
            'category'=>$product
        ]);
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);        
        return response()->json($product);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);        
        $product->fill($request->post())->save();
        return response()->json([
            'message'=>'Product Updated Successfully!!',
            'category'=>$product
        ]);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);        
        $product->delete();
        return response()->json([
            'message'=>'Category Deleted Successfully!!'
        ]);
    }
}
