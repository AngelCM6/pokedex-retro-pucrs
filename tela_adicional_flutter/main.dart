import 'package:flutter/material.dart';

void main() => runApp(HallDaFamaApp());

class HallDaFamaApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(fontFamily: 'Courier'), // Simula o estilo pixel
      home: HallDaFamaScreen(),
    );
  }
}

class HallDaFamaScreen extends StatelessWidget {
  // Dados em memória (Critério da PUCRS)
  final List<Map<String, String>> favoritos = [
    {"nome": "CHARIZARD", "id": "006", "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},
    {"nome": "PIKACHU", "id": "025", "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"},
    {"nome": "MEWTWO", "id": "150", "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xFF9BBC0F), // Verde Game Boy
      appBar: AppBar(
        title: Text("HALL DA FAMA", style: TextStyle(color: Color(0xFF0F380F), fontWeight: FontWeight.bold)),
        backgroundColor: Color(0xFF8BAC0F),
        elevation: 0,
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          children: [
            Text("MEUS FAVORITOS (FLUTTER SCREEN)", 
                 style: TextStyle(color: Color(0xFF0F380F), fontSize: 18, fontWeight: FontWeight.bold)),
            SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: favoritos.length,
                itemBuilder: (context, index) {
                  return Container(
                    margin: EdgeInsets.only(bottom: 15),
                    padding: EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: Color(0xFF8BAC0F),
                      border: Border.all(color: Color(0xFF0F380F), width: 3),
                    ),
                    child: Row(
                      children: [
                        Image.network(favoritos[index]['img']!, width: 80),
                        SizedBox(width: 20),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(favoritos[index]['nome']!, 
                                 style: TextStyle(color: Color(0xFF0F380F), fontSize: 20, fontWeight: FontWeight.bold)),
                            Text("#${favoritos[index]['id']}", 
                                 style: TextStyle(color: Color(0xFF306230), fontSize: 16)),
                          ],
                        ),
                      ],
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}