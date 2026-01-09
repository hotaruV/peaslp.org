<?php if (!defined('APPLICATION')) exit; ?>
<script>
	<?php 
		$max_file_size = parse_size(ini_get('upload_max_filesize'));
		if(parse_size(ini_get('post_max_size')) < $max_file_size) { $max_file_size = parse_size(ini_get('post_max_size')); }
	?>
	var_form_file_size = <?=$max_file_size;?>;
</script>

<div class="machotes">
	<div id="evaluar_formulario_indicador">
        <div class="item" data-obligatorio="true">
            <div class="p"> Aprobar la captura del indicador por parte del Actor responsable:</div>
            <div class="r">
                <label>
                    <input type="radio" value="1" name="input_aprobo" /> Sí, aprobar captura
                </label>
                <label>
                    <input type="radio" value="2" name="input_aprobo" /> No
                </label>
            </div>
        </div>
        <div class="item no_imprimirs" data-obligatorio="true" id="div_retroalimentacion">
			<div class="p">Retroalimentación:</div>
			<div class="r">
				<textarea id="input_retroalimentacion" class="auto"></textarea>
			</div>
		</div>
        <div class="item no_imprimirs" data-obligatorio="false">
            <div class="r">
                <label>
                    <input type="checkbox" value="1" name="input_notificar" /> Notificar via correo electrónico al actor
                </label>
            </div>
        </div>
        <div class="item align-left">
			<a href="#" id="btn_pregunta_guardar" class="boton small"> Enviar </a> - 
			<a href="#" id="btn_pregunta_regresar" class="">Regresar</a>
		</div>	
	</div>
    <div id="evaluar_formulario">		
        <div class="item" data-obligatorio="true">
            <div class="p"> Aprobar la captura de la línea de acción por parte del Actor responsable:</div>
            <div class="r">
                <label>
                    <input type="radio" value="1" name="input_aprobo" /> Sí, aprobar captura
                </label>
                <label>
                    <input type="radio" value="2" name="input_aprobo" /> No
                </label>
            </div>
        </div>
        <div class="item no_imprimirs" data-obligatorio="true" id="div_retroalimentacion">
			<div class="p">Retroalimentación:</div>
			<div class="r">
				<textarea id="input_retroalimentacion" class="auto"></textarea>
			</div>
		</div>
        <div class="item no_imprimirs" data-obligatorio="false">
            <div class="r">
                <label>
                    <input type="checkbox" value="1" name="input_notificar" /> Notificar via correo electrónico al actor
                </label>
            </div>
        </div>
        <div class="item align-left">
			<a href="#" id="btn_pregunta_guardar" class="boton small"> Enviar </a> - 
			<a href="#" id="btn_pregunta_regresar" class="">Regresar</a>
		</div>
	</div>
	<div id="pregunta_formulario_indicador">
    	<div class="item" data-obligatorio="true">
            <div class="p"> El indicador ya se inició:</div>
            <div class="r">
                <label>
                    <input type="radio" value="1" name="input_iniciado" /> Sí, indicador iniciado
                </label>
                <div class="extra" id="extra_1" data-name="Porcentaje de avance" data-filto='{"especificar":true}'></div>
                <label>
                    <input type="radio" value="2" name="input_iniciado" /> No
                </label>
            </div>
        </div>
        <div id="div_iniciado">
            <div class="item" data-obligatorio="true">
                <div class="avance p">Avance:</div>
                <div class="r">
                    <textarea id="input_avance" class="auto"></textarea>
                </div>
            </div>
            
            <div class="item" data-obligatorio="true" data-limit="5">
                <div class="p"> Evidencia (<?=formatBytes($max_file_size);?> máx por archivo):</div>
                <div class="r">
                    <div id="input_evidencia" data-id="evidencia" data-limit="15" data-ext=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.csv,.xlsx,.ppt,.pptx" class="archivos">
                        <a href="#" class="input_add boton small transparente">Agregar archivos</a>
                        <div class="files"></div>
                        <input type="file" value="" multiple class="input_file oculto">
                    </div>
                </div>
            </div>
        </div>
		<div class="item align-left">
			<a href="#" id="btn_pregunta_guardar" class="boton small"> Guardar captura </a> - 
			<a href="#" id="btn_pregunta_regresar" class="">Regresar</a>
		</div>
	</div>
	<div id="pregunta_formulario">
		<div class="item" data-obligatorio="true">
			<div class="p"> Se cumplio:</div>
			<div class="r">
				<label>
					<input type="radio" value="1" name="input_cumplio" /> No se ha iniciado
				</label>
				<label>
					<input type="radio" value="2" name="input_cumplio" /> En planeación
				</label>
				<div class="extra" id="extra_2" data-name="Porcentaje de avance" data-filto='{"especificar":true}'></div>
				<label>
					<input type="radio" value="3" name="input_cumplio" /> En proceso
				</label>
				<div class="extra" id="extra_3" data-name="Porcentaje de avance" data-filto='{"especificar":true}'></div>
				<label>
					<input type="radio" value="4" name="input_cumplio" /> Finalizado
				</label>
			</div>
		</div>
		<div class="item" data-obligatorio="true">
			<div class="p">Descripción:</div>
			<div class="r">
				<textarea id="input_descripcion" class="auto"></textarea>
			</div>
		</div>
		
		<div class="item" data-obligatorio="true" data-limit="5">
			<div class="p"> Evidencia (<?=formatBytes($max_file_size);?> máx por archivo):</div>
			<div class="r">
				<div id="input_evidencia" data-id="evidencia" data-limit="15" data-ext=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.csv,.xlsx,.ppt,.pptx" class="archivos">
					<a href="#" class="input_add boton small transparente">Agregar archivos</a>
					<div class="files"></div>
					<input type="file" value="" multiple class="input_file oculto">
				</div>
			</div>
		</div>
		<div class="item align-left">
			<a href="#" id="btn_pregunta_guardar" class="boton small"> Guardar captura </a> - 
			<a href="#" id="btn_pregunta_regresar" class="">Regresar</a>
		</div>
	</div>
	<div id="pregunta_indicador">
		<div class="pregunta">
			<div class="detalles">
            	<div class="estatus_captura"> </div>
                <div class="estatus_revision"> </div>
				<div class="eje"> <b>Eje:</b> <span ></span></div>
				<div><b>Prioridad:</b> <span class="prioridad"></span></div>
				<div><b>Plazo:</b> <span class="plazo"></span> </div>
				<div><p><b>Estrategia:</b> <span class="estrategia"></span></p></div>
			</div>
			<div class="indicador">
				<b>Indicador:</b> <br>
				<b class="big"></b>
			</div>
			<div class="resumen">
				<div class="renglon padding-x padding-y align-left iguales" data-w="640">
					<div class="col col2">
						<p>
							<span class="meta"></span> <br> 
							Metal al: <b><span class="meta_al"></span></b>
						</p>
						<p>
							<span class="evaluacion">Sin evaluar</span> <br> 
							<a href="#" class="a_retro no_imprimirs">Retroalimentación (<span class="retro">0</span>)</a>
						</p>
                        <p id="div_enviar" class="no_imprimirs">
                        	<a href="#" class="a_enviar" >Notificar via correo electrónico al actor</a>
                        </p>
                        <p class="no_imprimirs">
                        	<a href="#" class="a_capturar boton small" >Capturar</a>
                            
                        </p>
					</div>
					<div class="col col2">
						<p class="cumplio_txt">
                            <span class="metodo">Avance:</span> <br>
                            <span class="cumplio">No se ha iniciado</span>. <br />
                            <strong>Avance del <span class="porcentaje">0</span>%</strong>
						</p>
                        <div class="evidencia">
                            <p>Evidencia:</p>
                            <div class="listado"></div>
                        </div>
					</div>
                    <div class="renglon"></div>   
				</div>
                <div class="renglon"></div>                  
			</div>
			<div class="formulario">
				
			</div>
		</div>
	</div>
	<div id="pregunta_linea">
		<div class="pregunta">
			<div class="detalles">
            	<div class="estatus_captura"> </div>
                <div class="estatus_revision"> </div>
				<div class="eje"><b>Eje:</b> <span></span></div>
				<div><b>Prioridad:</b> <span class="prioridad"></span></div>
				<div><b>Plazo:</b> <span class="plazo"></span> </div>
				<div><p><b>Estrategia:</b> <span class="estrategia"></span></p></div>
			</div>
			<div class="linea">
				<b>Línea de acción: </b><br>
				<b class="big"></b>
			</div>
			<div class="resumen">
				<div class="renglon padding-x padding-y align-justify">
                	<div class="col">
                    	<p class="cumplio_txt">
                            <span class="cumplio">No se ha iniciado</span>.<br> 
                            <strong>Avance del <span class="porcentaje">0</span>%</strong>
                        </p>
                        <div class="margin-yb descripcion"></div>
                        <div class="evidencia">
                            <p>Evidencia:</p>
                            <div class="listado"></div>
                        </div>
					</div>
                </div>
                <div class="renglon padding-x padding-y align-left iguales no_imprimirs" data-w="640">
					<div class="col col2  align-left">
                    	<p>
							<span class="evaluacion">Sin evaluar</span> <br> 
							<a href="#" class="a_retro">Retroalimentación (<span class="retro">0</span>)</a> 
                        </p>
                        <p id="div_enviar">
                        	<a href="#" class="a_enviar" >Notificar via correo electrónico al actor</a>
                        </p>                    
					</div>
                    <div class="col col2 align-right">
                    	<p>
                        	<a href="#" class="a_capturar  boton small">Capturar</a>
                            
						</p>    
					</div>
					<div class="renglon"></div>
				</div>
                <div class="renglon"></div>
			</div>
			<div class="formulario">
				
			</div>
		</div>
	</div>
	
	<div id="archivo">
    	<div class="archivo">
			<div class="nombre"></div>
            <div class="acciones">
            	<small><a href="#" class="btn_float quitar">quitar</a></small>
            </div>
		</div>
    </div>
	<div id="usuario">
    	<div class="usuario">
			<div class="nombre"></div>
			<div class="perfil"></div>
			<div class="actor"></div>
		</div>
    </div>
	<div id="pregunta_light">
		<div class="pregunta">
		<div class="indicador">
				<b class="big"><span class="txt"></span></b>
				<blockquote>
					<p>
						<b>Meta:</b> <span class="meta"></span> <br />
						<b>Metal al:</b> <span class="meta_al"></span>  <br />
						<b>Método de cálculo:</b> <span  class="metodo"></span>  <br />
						<b>Fuente de verificación:</b> <span  class="fuente"></span>  <br />
					</p>
				</blockquote>
				<div class="resultados">
					Se cumplio con el indicador: <b><span class="cumplio">No</span></b> <br />
					Avance del <b><span class="avance">0</span>%</b> <br />
					Descripción: <b><span class="descripcion"></span></b><br />
					Evidencia:  <b><span class="evidencia"></span></b><br />
				</div>
				
			</div>
			<!--
			<div class="eje">
				Eje: <span></span>
			</div>
			<div class="prioridad">
				Prioridad: <span class="txt"></span>
				<blockquote>
					Plazo (temporalidad): <span class="plazo"></span>
				</blockquote>
			</div>
			<div class="estrategia">
				Estrategia: <span class="txt"></span> 
				<blockquote>
					Instituciones coordinadoras:
					<div class="instituciones">
						<ul>
							<li><span>Institución</span> <span class="siglas">(Institución)</span></li>
						</ul>
					</div>
				</blockquote>					
			</div>
			<div class="linea">
				Línea de acción:  <span class="txt"></span>
				<blockquote>
					Anexo ATA: <span class="anexo"></span> <br>
					Actores responsables:
					<div class="actores">
						<ul>
							<li><span>Actor</span> <span class="siglas">(Actor)</span></li>
						</ul>
					</div>
				</blockquote>	
			</div>
			-->
		</div>
	</div>
</div>