SELECT marca, modelo
FROM pluma
WHERE id_pluma IN (
	SELECT id_pluma
	FROM sistema_carga_pluma
	WHERE id_sistema_carga IN (
		SELECT id_sistema_carga
		FROM sistema_carga
		WHERE sistema_carga = 'cartucho/convertidor'
	));

SELECT marca, modelo
FROM pluma
WHERE precio<20 AND id_pluma IN (SELECT id_pluma
FROM compra
WHERE id_usuario IN (SELECT id_usuario
FROM usuario
WHERE username <> "alejandro"));

